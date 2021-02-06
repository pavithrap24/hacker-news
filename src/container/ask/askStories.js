import React, { useState, useEffect } from "react";
import axios from "axios";
import AskStory from "./askStory";
import { Grid } from "@material-ui/core";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const NewStoriesUrl = `${baseUrl}askstories.json`;

function AskStories() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    const getAskStories = async () => {
      const askStoryIds = await axios
        .get(NewStoriesUrl)
        .then((res) => res.data)
        .then((data) => setStoryIds(data));
      return askStoryIds;
    };
    getAskStories();
  }, []);

  return (
    <Grid container justify="center" spacing={3}>
      {storyIds && storyIds.length > 0
        ? storyIds.map((storyId, index) => {
            return <AskStory key={index} storyId={storyId} />;
          })
        : null}
    </Grid>
  );
}

export default AskStories;
