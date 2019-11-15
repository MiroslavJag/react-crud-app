import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../../../store/actions";
import {TableWrapper, Table, IconWrapper, IconAction, ActionWrapper, IdField, NameField} from '../style'
import EditIcon from "../../../assets/icons/edit-button.svg";
import DeleteIcon from "../../../assets/icons/delete-button.svg";

type Props = {
  items: Array,
  setItemIndex: Function
};

const ItemsTable = (props: Props) => {
  //Delete the item from the store
  const deleteItemStore = index => {
    const itemsList = [...props.items];
    if (
      window.confirm(
        `Are you sure you want to delete this item! \n ${itemsList[index].name}`
      )
    ) {
      itemsList.splice(index, 1);
      //Dispatch the action to the store and update the list
      props.deleteItem(itemsList);
    }
  };

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <IdField>{"ID"}</IdField>
            <NameField>{"Name"}</NameField>
            <th>{"Brand"}</th>
            <th>{"Category"}</th>
            <th>{"Model"}</th>
            <th>{"Actions"}</th>
          </tr>
        </thead>
        <tbody>
          {props.items.length > 0 ? (
            props.items.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>{item.model}</td>
                <td>
                  <ActionWrapper>
                    <Link
                      to={{
                        pathname: "/edit-item",
                        state: { index: index }
                      }}
                    >
                      <IconWrapper>
                        <IconAction src={EditIcon} />
                      </IconWrapper>
                    </Link>
                    <IconWrapper>
                      <IconAction
                        src={DeleteIcon}
                        onClick={() => deleteItemStore(index)}
                      />
                    </IconWrapper>
                  </ActionWrapper>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>{"No items!"}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

//Get state from the redux
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

// Dispatch the action for initial data
const mapDispatchToProps = dispatch => {
  return {
    deleteItem: items => dispatch(deleteItem(items))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTable);
