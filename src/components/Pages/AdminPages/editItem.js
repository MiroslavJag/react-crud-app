import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateItem } from "../../../store/actions";
import ImageUpload from "../../../components/AdminSection/ImageUpload";
import { ITEM_MODEL } from "../../../components/AdminSection/item_models";
import {
  Container,
  ItemForm,
  ErrorWrapper,
  SubmitButton,
  Title
} from "../style";

type Props = {
  itemIndex: number,
  setItemIndex: Function
};

class EditItem extends Component<Props, State> {
  state = ITEM_MODEL;

  componentDidMount() {
    //Set item values to state from store based on index prop
    if (
      this.props.location.state &&
      this.props.location.state.index !== undefined
    )
      this.setState(this.props.items[this.props.location.state.index]);
  }

  //Add from values to state
  addItemValues = e => {
    this.setState({ ...[e.target.name], [e.target.name]: e.target.value });
  };

  //Add image url to state from ImageUpload callback
  addImageUrl = url => {
    this.setState({ image: url });
  };

  //Submit changes
  updateItemStore = e => {
    e.preventDefault();
    const itemsList = [...this.props.items];
    //Find item from the store list based on prop index and replace him with updated item from the state
    itemsList[this.props.location.state.index] = this.state;
    //Dispatch the action and update all list in the store
    this.props.updateItem(itemsList);
    this.setState(ITEM_MODEL);
    window.alert("You have successfully updated item!");
    //Go to admin page
    this.props.history.push("/admin");
  };

  renderContent = routerProps => {
    //If index prop, return the form, othervise show error page if someone access to the page trough URL
    if (routerProps.state && routerProps.state.index !== undefined) {
      return (
        <>
          <Title>{"Edit item"}</Title>
          <ItemForm>
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
              value={this.state.brand}
              required
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
            <SubmitButton onClick={e => this.updateItemStore(e)}>
              {"Update item"}
            </SubmitButton>
          </ItemForm>
        </>
      );
    } else {
      return (
        <ErrorWrapper>
          Oops!
          <br />
          Looks like the Edit Page is missing.
          <br />
          Please go to Edit Items!
        </ErrorWrapper>
      );
    }
  };

  render() {
    const routerProps = this.props.location;
    return <Container>{this.renderContent(routerProps)}</Container>;
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
    updateItem: (item, index) => dispatch(updateItem(item, index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditItem));
