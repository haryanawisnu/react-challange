import React, { Component } from 'react';
import Home from './Home.js';
import{BrowserRouter,Route} from 'react-router-dom';
import Form from './Form.js';
import axios from 'axios';
import './App.css';
import Header from './Header.js';
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

class App extends Component {
  constructor(){
    super()
    this.state={heroList:[],id:'-',name:'-',range:0};
  }
  onRowSelection(key) {
    console.log(key,this.state.heroList[key]);
    this.setState({
      id:this.state.heroList[key].ID,
      name:this.state.heroList[key].Name,
      range:this.state.heroList[key].Range
    })
    history.push('/detail');
 }
  componentDidMount(){
    let self=this;
    axios.get('http://api.herostats.io/heroes/all')
    .then(function (response) {
      let arr=[];
      for (var i = 1; i <= 10; i++) {
      arr.push(response.data[i]);
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
    <div className="App" id="App">
      <Header/>
        <BrowserRouter >
          <div>
            <Route exact path="/" component={()=><Home onRowSelection={this.onRowSelection.bind(this)} heroList={this.state.heroList}/>} />
            <Route  path="/detail" component={()=><Form id={this.state.id} name={this.state.name} range={this.state.range}/>} />
          </div>
      </BrowserRouter>
        <p className="App-intro">
          Copyright @Hactive8_Dota2.
        </p>
    </div>
    );
  }
}

export default App;
