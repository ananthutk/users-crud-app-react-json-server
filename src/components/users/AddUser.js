import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:3003/users/", user);

    history.push("/");
  }

  const { name, username, email, phone, website } = user;
  return (
    <div>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg mt-3 mb-3"
                placeholder="Enter Your Name"
                required
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg mt-3 mb-3"
                placeholder="Enter Your Username"
                required
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg mt-3 mb-3"
                placeholder="Enter Your E-mail Address"
                required
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg mt-3 mb-3"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg mt-3 mb-3"
                placeholder="Enter Your Website Name"
                name="website"
                value={website}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block w-100">Add User</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser
