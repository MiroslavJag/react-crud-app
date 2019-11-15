import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UploadImageWrapper,
  ActionWrapperImage,
  ImageWrapper,
  Progress,
  FileInput,
  UploadButton
} from "../style";
import { storage } from "../../../services/firebaseConfig";

type Props = {
  addImageUrl: Function,
  imageUrl?: string
};

type State = {
  image: string,
  url: string,
  progress: 0
};

class ImageUpload extends Component<State, Props> {
  state = {
    image: null,
    url: "",
    progress: 0
  };

 //When list is updated in the store clean the state
  componentWillReceiveProps(nextProps) {
    if (this.props.items !== nextProps.items) {
      this.setState({ image: null, url: "", progress: 0 });
      }
  }

  //Get image from the device 
  handleChange = e => {
    if (e.target.files[0]) {
      const getImage = e.target.files[0];
      this.setState({ image: getImage });
    }
  };

  //Upload image on Google Firebase
  handleUpload = e => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function
        const uploadProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress: uploadProgress });
      },
      error => {
        console.log(error);
      },
      () => {
        // Get image URL from Firebase
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url: url });
            //Set the image url in the state from parent component
            this.props.addImageUrl(url);
          });
      }
    );
  };

  render() {
    return (
      <UploadImageWrapper>
        <ActionWrapperImage>
          <ImageWrapper
            src={
              this.props.imageUrl ||
              this.state.url ||
              "http://via.placeholder.com/200x200"
            }
            alt="Uploaded images"
            height="200"
            width="200"
          />
          <Progress value={this.state.progress} max="100" />
        </ActionWrapperImage>
        <ActionWrapperImage>
          <FileInput type="file" onChange={e => this.handleChange(e)} />
          <UploadButton
            disabled={this.state.image === null}
            onClick={e => this.handleUpload(e)}
          >
            Upload
          </UploadButton>
        </ActionWrapperImage>
      </UploadImageWrapper>
    );
  }
}

//Get state from the redux
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps, null)(ImageUpload);
