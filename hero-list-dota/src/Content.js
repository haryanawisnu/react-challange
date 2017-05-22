import React from 'react';
import './App.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Content extends React.Component {
  constructor(props){
    super(props)
}
  render() {
    return (
        <div className="App-content">
        <MuiThemeProvider>
        <Table onRowSelection={this.props.onRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Range">Range</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.herolist.map((hero) =>{
              return(
                <TableRow key={hero.ID}>
                  <TableRowColumn>{hero.ID}</TableRowColumn>
                  <TableRowColumn>{hero.Name}</TableRowColumn>
                  <TableRowColumn>{hero.Range}</TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        </MuiThemeProvider>
        </div>
    )
  }

}

export default Content;
