import React, { useState, useEffect } from "react";
import axios from "axios";
import Anchor from "../../components/Anchor";
import { Grid, Paper, Typography } from "@material-ui/core";
import moment from "moment";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const storyUrl = `${baseUrl}/item/`;

function PastStory(props) {
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

  const { url, title, score, by, time } = story || {};
  const period = moment.unix(time).fromNow();

  return (
    story && (
      // <Grid container item spacing={3}>
      <Grid item xs={10} sm={7}>
        <Paper variant="outlined" elevation={3} style={{ padding: "1em" }}>
          <a href={url}>
            <Typography>{title}</Typography>
          </a>
          <Typography variant="caption">
            {score} points by
            <Anchor to={{ pathname: `user?id=${by}` }}>{by}</Anchor>
            <Anchor to={{ pathname: `item?id=${storyId}` }}> {period}</Anchor>
            {"  |  hide"}
            {"  |  so so comments"}
          </Typography>
          <Typography></Typography>
        </Paper>
        {/* </Grid> */}
      </Grid>
    )
  );
}

export default PastStory;
