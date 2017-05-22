import React from 'react';
import Content from './Content.js';

class Home extends React.Component {
  constructor(props){
    super(props)
}
render(){
  return(
        <Content herolist={this.props.heroList} onRowSelection={this.props.onRowSelection}/>
  )
}
}

export default Home;
