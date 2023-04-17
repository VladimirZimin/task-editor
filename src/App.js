import React, { Component } from "react";
import Layout from "./components/Layout";
import Tasks from "./components/Tasks/Tasks";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Tasks />
      </Layout>
    );
  }
}
