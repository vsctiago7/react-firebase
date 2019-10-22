import React, { Component } from "react";

import { withFirebase } from "../Firebase";

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      houses: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    // this.props.firebase.users().on("value", snapshot => {
    //   const usersObject = snapshot.val();

    //   const usersList = Object.keys(usersObject).map(key => ({
    //     ...usersObject[key],
    //     uid: key
    //   }));

    //   this.setState({
    //     users: usersList,
    //     loading: false
    //   });
    // });

    this.props.firebase
      .users()
      .then(snapshot => {
        console.log(snapshot.docs);
        const userList = snapshot.docs.map(doc => doc.data());

        this.setState({
          ...this.state,
          users: userList,
          loading: false
        })
      })
      .catch(err => {
        console.log("Error getting docs", err);
      });
  }

  // this.props.firebase.houses().on("value", snapshot => {
  //   const housesObject = snapshot.val();

  //   const housesList = Object.keys(housesObject).map(key => ({
  //     ...housesObject[key],
  //     uid: key
  //   }));

  //   this.setState({
  //     houses: housesList,
  //     loading: false
  //   });
  // });
  // }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(AdminPage);
