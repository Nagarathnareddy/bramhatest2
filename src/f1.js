import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Table} from 'react-bootstrap'



//getting data from server//
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {response:[],
       buttonClicked:false
       
    }
  }
  getData=async()=>
{
 const response = await fetch ("https://api.openbrewerydb.org/breweries")
 const convertData = await response.json()
 console.log(convertData)
this.setState({response:convertData,buttonClicked:true})
}

  render() {
    return (
      
(this.state.buttonClicked)?(<div> <button className="button" onClick={this.getData}>Get List of Breweries</button>
         <Table striped bordered hover color="black">
         <tr>
                 <th>Name</th>
                 <th>Id</th>
                 <th>City</th>
                 <th>State</th>
                 <th>Country</th>
                 <th>OBDB Id</th>
                 <th>Postal code</th>
                 
                 </tr>
          </Table>
        {this.state.response.map((details)=>
        {
          return(
            <div>
             <Table striped bordered hover color="black">
               
                 <tr>
                   <td>{details.name}</td>
                   <td>{details.id}</td>
                   <td>{details.city}</td>
                   <td>{details.state}</td>
                   <td>{details.country}</td>
                   <td>{details.obdb_id}</td>
                   <td>{details.postal_code}</td>
                 </tr>
              </Table>
          
          </div>

          )
          
        }
        )}
      </div>)
   :( <button className="button2" onClick={this.getData}>Get List of Breweries</button>)
    )
  }
}