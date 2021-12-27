import { Card, Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./../scss/custom.scss";

const DataFetching = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    const array = data.data;
    console.log(array);
    setUsers(array);
  };

  const Loading = () => {
    setLoading(true);
    {
      isLoading ? (
        loadUsers()
      ) : (
        <div class="spinner-grow text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
  };

  return (
    <div id="task2">
      <nav>
        <h1 style={{ marginLeft: "10px" }}>LGM-VIP</h1>
        <button onClick={Loading} style={{ marginRight: "10px" }}>
          GET USERS
        </button>
      </nav>{" "}
      <Container id="fetchedData" className="d-flex justify-content-center">
        <ul>
          {users.map(({ id, avatar, first_name, last_name, email }) => (
            <div key={id} class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={avatar}
                    alt="Avatar"
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "2px solid black",
                      borderRadius: "50%",
                      marginTop: "15px",
                    }}
                  />
                  <div className="name">{first_name}</div>
                  <div className="name1">{last_name}</div>
                </div>
                <div class="flip-card-back">
                  <p>
                    <strong>Email: </strong>
                    {email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default DataFetching;
