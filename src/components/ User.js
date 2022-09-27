import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import LogOut from "./LogOut";

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([]);
  var em = localStorage.getItem('email');
  var pas = localStorage.getItem('pass');
  if (em == null && pas == null) {
    navigate('/Log')
  }

  const f = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
    setUsers(json.data);
  };

  React.useEffect(() => {
    f();
  }, []);

  const Delete = () => {
    alert("Are you sure you want to delete");
  };

  // var log = localStorage.getItem('login');
  // const location = window.location;
  // useEffect(() => {
  //   console.log(location);
  //   console.log(log);
  //   if (log != null && location.pathname == '/user') {
  //     location.replace('/addUser');
  //   }
  // }, [location])



  return (
    <>
      <div className="App">


        <Container>
          <Row>
            <h1 className="p-3">User Details</h1>
            <LogOut />
            <Col className="col-md-12">
              <Button
                className="m-2"
                variant="primary"
                onClick={() => navigate("/addUser")}
              >
                Add Users
              </Button>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* <tbody>
             { filterdata.map((user) => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>
                          <img src={user.avatar} alt="loading..."></img>
                        </td>
                      </tr>
              )
              })}
              </tbody>  */}
                <tbody>
                  {users.length &&
                    users.map((user) => {
                      return (
                        <tr>
                          <td>{user.id}</td>
                          <td>{user.first_name}</td>
                          <td>{user.last_name}</td>
                          <td>{user.email}</td>
                          <td>
                            <img src={user.avatar} alt="loading..."></img>
                          </td>
                          <td>
                            <Button
                              className="m-2"
                              variant="primary"
                              onClick={() => navigate("/editUser")}
                            >
                              Edit Users
                            </Button>
                            <Button
                              className="m-2"
                              variant="primary"
                              onClick={() => Delete()}
                            >
                              Delete Users
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>

              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Users;