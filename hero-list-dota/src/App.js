import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Form from './Form.js';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={heroList:[],id:'-',name:'-',range:0};
  }
  onRowSelection(key) {
    console.log(key)
  }
  componentDidMount(){
    let self=this;
    axios.get('http://api.herostats.io/heroes/all')
    .then(function (response) {
      let obj={};
      let arr=[];
      for (var i = 1; i <= 10; i++) {
      obj.id=response.data[i].ID;
      obj.Name=response.data[i].Name;
      obj.Range=response.data[i].Range;
      arr.push(obj);
      obj={};
      }
      self.setState({
        heroList:arr
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <Content herolist={this.state.heroList} onRowSelection={this.onRowSelection}/>
      <Form id={this.state.id} name={this.state.name} range={this.state.range}/>
      <p className="App-intro">
        Copyright @Hactive8_Dota2.
      </p>
      </div>
    );
  }
}

export default App;
