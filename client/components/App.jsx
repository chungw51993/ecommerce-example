import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    axios({
      method: 'GET',
      url: '/api/product',
    }).then((resp) => {
      const { data } = resp;
      this.setState({
        items: data.data,
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    return(
      <section id="app">
        <h1>Jin's Sports and Goods</h1>
      </section>
    );
  }
}

export default App;
