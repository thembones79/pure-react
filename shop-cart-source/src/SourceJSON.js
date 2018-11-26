import React from "react";
import { items } from "./static-data";

class SourceJSON extends React.Component {
  state = { dataFeed: JSON.stringify(items) };

  handleDataChange = event => {
    this.setState({ dataFeed: event.target.value });
  };
  render() {
    return (
      <textarea
        id="editor"
        value={this.state.dataFeed}
        onChange={this.handleDataChange}
      />
    );
  }
}

export default SourceJSON;
