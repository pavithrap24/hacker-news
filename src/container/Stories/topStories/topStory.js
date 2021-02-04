import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import moment from "moment";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const storyUrl = `${baseUrl}/item/`;

function TopStory(props) {
  const { storyId } = props;
  const [story, setStory] = useState([]);

  const getStory = async () => {
    const story = await axios
      .get(`${storyUrl + storyId}.json`)
      .then((res) => res.data)
      .then((data) => setStory(data));

    return story;
  };

  useEffect(() => {
    getStory();
  }, []);

  const { url, title, score, by, time } = story;
  const period = moment.unix(time).fromNow();

  return (
    <div>
      {story ? (
        <div>
          <a href={url}>
            <Typography>{title}</Typography>
          </a>
          <Typography variant="caption">
            storyId: {storyId} {score} points by
            <Link to={{ pathname: `user?id=${by}` }}>{by}</Link>
            <Link to={{ pathname: `item?id=${storyId}` }}> {period}</Link>
            {"  |  hide"}
            {"  |  so so comments"}
          </Typography>
          <Typography></Typography>
        </div>
      ) : null}
    </div>
  );
}

export default TopStory;
