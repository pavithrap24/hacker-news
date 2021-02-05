import React, { useState, useEffect } from "react";
import axios from "axios";
import Anchor from "../../../components/Anchor";
import { Card, CardContent, Typography } from "@material-ui/core";
import moment from "moment";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const storyUrl = `${baseUrl}/item/`;

function PastStory(props) {
  const { storyId } = props;
  const [story, setStory] = useState([]);

  useEffect(() => {
    const getStory = async () => {
      const storyData = await axios
        .get(`${storyUrl + storyId}.json`)
        .then((res) => res.data)
        .then((data) => setStory(data));
      console.log("storyData ", storyData);
      const story = storyData.map((data) => {
        return moment.unix(data.time).fromNow();
      });
      console.log("story ", story);
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
          <Typography>Stories from {}</Typography>
          <Typography>
            {" "}
            Go back a <Anchor to={{ pathname: `user?id=${by}` }}>
              day
            </Anchor>, <Anchor to={{ pathname: `user?id=${by}` }}>month</Anchor>
            , or <Anchor to={{ pathname: `user?id=${by}` }}>year</Anchor>. Go
            forward a<Anchor to={{ pathname: `user?id=${by}` }}>day</Anchor>.
          </Typography>
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
                {"  |  so so comments"}
              </Typography>
              <Typography></Typography>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </div>
  );
}

export default PastStory;
