import React, { Component } from "react";
import { connect } from "react-redux";
import {HomeWrapper} from '../style'
import ItemComponent from "../../ItemComponent";

export class HomePage extends Component {
  render() {
    const itemsList = this.props.items.map(item => {
      return <ItemComponent item={item} />;
    });
    return <HomeWrapper>{itemsList}</HomeWrapper>;
  }
}
//Get state from the redux
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps, null)(HomePage);
