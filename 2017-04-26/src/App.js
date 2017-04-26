import React, { Component } from 'react';
import ReactDOM from "react-dom";

import TaskList from "./TaskList";

const ENTER_KEY = 13;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    this.focusInputIfNeeded(prevState);
  }

  focusInputIfNeeded(prevState) {
    if (prevState.items.length < this.state.items.length) {
      const realInput = ReactDOM.findDOMNode(this.refs.input);
      realInput.focus();
    }
  }

  render() {
    const { items, text } = this.state;
    const isNeedCount = items.length > 0;

    return (
      <div>
        <TaskList
          items={items}
          onClickDelete={this.onClickDelete.bind(this)}
          />
        <div>
          <input
            ref="input"
            type="text"
            value={text}
            onChange={(e) => this.setState({ text: e.target.value })}
            onKeyUp={this.onKeyUpInput.bind(this)}
            />
          {" "}
          <input type="submit" value="Add" onClick={this.onClickAddButton.bind(this)} />
          <br />
          {isNeedCount && <p>{items.length}</p>}
        </div>
      </div>
    );
  }

  onKeyUpInput(e) {
    if (e.keyCode === ENTER_KEY) {
      this.addItem();
    }
  }

  onClickAddButton() {
    const { text } = this.state;

    // 入力値がからの場合は何もしないで終了
    if (text == null || text.length == 0) { return; }

    this.addItem();
  }

  onClickDelete(i) {
    if (window.confirm("ほんとに？")) {
      this.removeItem(i);
    }
  }

  removeItem(i) {
    const { items } = this.state;
    const newItems = [
      ...items.slice(0, i),
      ...items.slice(i + 1),
    ];
    this.setState({ items: newItems });
  }

  addItem() {
    const { items, text } = this.state;
    // 新しい配列を作ってstateにセットする
    const newItems = items.concat([text]);
    this.setState({ items: newItems, text: "" });
  }
}

export default App;
