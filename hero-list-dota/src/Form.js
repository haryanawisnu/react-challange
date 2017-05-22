import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};

class Form extends React.Component {
  constructor(props){
    super(props)
}
  render() {
    return (
        <div className="App-content">
        <MuiThemeProvider>
        <Paper key={this.props.id} zDepth={2}>
          <TextField hintText="ID" style={style} underlineShow={false} value={this.props.id} />
          <Divider />
          <TextField hintText="Name" style={style} underlineShow={false} value={this.props.name}/>
          <Divider />
          <TextField hintText="Range" style={style} underlineShow={false} value={this.props.range}/>
          <Divider />
        </Paper>
        </MuiThemeProvider>
        </div>
    )
  }
}

export default Form;
