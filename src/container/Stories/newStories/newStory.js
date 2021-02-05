import React, { useState, useEffect } from "react";
import axios from "axios";
import Anchor from "../../../components/Anchor";
import { Card, CardContent, Typography } from "@material-ui/core";
import moment from "moment";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const storyUrl = `${baseUrl}/item/`;

function NewStory(props) {
  const { storyId } = props;
  const [story, setStory] = useState([]);

  useEffect(() => {
    const getStory = async () => {
      const story = await axios
        .get(`${storyUrl + storyId}.json`)
        .then((res) => res.data)
        .then((data) => setStory(data));

      return story;
    };
    getStory();
  }, [storyId]);

  const { url, title, score, by, time } = story;
  const period = moment.unix(time).fromNow();

  return (
    <div>
      {story ? (
        <div>
          <Card variant="outlined" style={{ width: "500px" }}>
            <CardContent>
              <a href={url}>
                <Typography>{title}</Typography>
              </a>
              <Typography variant="caption">
                {score} points by
                <Anchor to={{ pathname: `user?id=${by}` }}>{by}</Anchor>
                <Anchor to={{ pathname: `item?id=${storyId}` }}>
                  {" "}
                  {period}
                </Anchor>
                {"  |  hide"}
                {"  |  past"}
                {"  |  discuss"}
              </Typography>
              <Typography></Typography>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </div>
  );
}

export default NewStory;
