import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Typography } from "@material-ui/core";

function User(props) {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id");

  const [user, setUser] = useState([]);

  const userUrl = `https://hacker-news.firebaseio.com/v0/user/${id}.json`;

  const getUser = async () => {
    const story = await axios
      .get(userUrl)
      .then((res) => res.data)
      .then((data) => setUser(data));

    return story;
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log("user props ", props);
  return (
    <div>
      <Typography>user: {id}</Typography>
      <Typography>created: {"November 28, 2013"}</Typography>
      <Typography>karma: {user.karma}</Typography>
      <Typography>about: {user.about}</Typography>
      <Typography>
        <Link to=""> submissions</Link>
      </Typography>
      <Typography>
        <Link to="">comments</Link>
      </Typography>
      <Typography>
        <Link to="">favorites</Link>
      </Typography>
    </div>
  );
}

export default User;
