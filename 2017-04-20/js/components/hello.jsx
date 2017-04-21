import React, { Component } from "react";
import PropTypes from "prop-types";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.initialName,
    };
  }

  render() {
    const { name } = this.state;

    return (
      <div className="hoge">
        hello {name}
        <br />
        <input type="text" value={name} onChange={this.handleChange.bind(this)} />
        {this.props.children}
      </div>
    );
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }
}

Hello.propTypes = {
  initialName: PropTypes.string.isRequired,
};

export default Hello;
