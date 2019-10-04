import React, { Component } from "react";
import firebase from "./firebase";

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    // here we create a variable that holds a reference to our database
    const dbRef = firebase.database().ref();

    // here we add an event listener to that variable that will fire
    // every time there is a change in the database

    // this event listener takes a callback function which we will use to get our data
    // from the database and call it response
    dbRef.on("value", response => {
    // here we use Firebase's .val() method to parse our database info the way we want it
      console.log(response.val());
    });

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user 
        
        });
      }
    });
  }

  handleChange = event => {
    let value = event.target.value;

    this.setState({
      [event.target.name]: value
    });
  };

  render() {
    return (
      <div className="adminDashboard wrapper">
        <h1>Admin Dashboard</h1>

        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}
export default AdminDashboard;
