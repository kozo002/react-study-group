import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  deleteItem,
} from "./actions";

import App from "./App";

class TaskAppContainer extends React.Component {
  render() {
    // DEBUG
    console.log(this.props);

    const { items, onClickAdd, onClickDelete } = this.props;

    return <App
      items={items}
      onClickAdd={onClickAdd}
      onClickDelete={onClickDelete}
    />;
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd(text) {
      dispatch(addItem(text));
    },
    onClickDelete(index) {
      dispatch(deleteItem(index));
    }
  };
};

const ReduxTodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskAppContainer);

export default ReduxTodoApp;
