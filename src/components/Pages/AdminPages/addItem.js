import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../../store/actions";
import { Container, ItemForm, SubmitButton, Title } from "../style";
import ImageUpload from "../../../components/AdminSection/ImageUpload";
import { ITEM_MODEL } from "../../../components/AdminSection/item_models";

type Props = {
  items: object
};

class AddItem extends Component<Props, State> {
  state = ITEM_MODEL;

  //Add form values to state
  addItemValues = e => {
    this.setState({ ...[e.target.name], [e.target.name]: e.target.value });
  };

  //Add new item to store and reset state with ITEM MODEL
  addItemToStore = e => {
    console.log("addItemToStore");
    e.preventDefault();
    //Check if image is uploaded
    if (this.state.image) {
      this.props.addItem(this.state);
      this.setState(ITEM_MODEL);
      window.alert("You have successfully added new item!");
    } else {
      window.alert("Please upload item image!");
    }
  };

  //Add image url from ImageUpload component callback
  addImageUrl = url => {
    this.setState({ image: url });
  };

  render() {
    return (
      <Container>
        <Title>{"Add new item"}</Title>
        <ItemForm onSubmit={e => this.addItemToStore(e)}>
          <label>{"Name"}</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.addItemValues(e)}
            required
          />
          <label>{"Brand"}</label>
          <input
            type="text"
            name="brand"
            onChange={e => this.addItemValues(e)}
            required
            value={this.state.brand}
          />
          <label>{"Category"}</label>
          <input
            type="text"
            name="category"
            onChange={e => this.addItemValues(e)}
            value={this.state.category}
            required
          />
          <label>{"Model"}</label>
          <input
            type="text"
            name="model"
            onChange={e => this.addItemValues(e)}
            value={this.state.model}
            required
          />
          <label>{"Price"}</label>
          <input
            type="text"
            name="price"
            onChange={e => this.addItemValues(e)}
            value={this.state.price}
            required
          />
          <label>{"Description"}</label>
          <textarea
            name="description"
            onChange={e => this.addItemValues(e)}
            value={this.state.description}
            rows="3"
          />
          <label>{"Upload Image"}</label>
          <ImageUpload
            addImageUrl={this.addImageUrl}
            imageUrl={this.state.image}
          />
          <SubmitButton>{"Add item"}</SubmitButton>
        </ItemForm>
      </Container>
    );
  }
}

//Get state from the redux
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

// Dispatch the action for initial data
const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
