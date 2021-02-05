import React, { useState, useEffect } from "react";
import axios from "axios";
import NewStory from "./newStory";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const NewStoriesUrl = `${baseUrl}newstories.json`;

function NewStories() {
  const [storyIds, setStoryIds] = useState([]);

  const getNewStories = async () => {
    const newStoryIds = await axios
      .get(NewStoriesUrl)
      .then((res) => res.data)
      .then((data) => setStoryIds(data));
    return newStoryIds;
  };

  useEffect(() => {
    getNewStories();
  }, []);

  return (
    <div>
      {storyIds && storyIds.length > 0
        ? storyIds.map((storyId, index) => {
            return <NewStory key={index} storyId={storyId} />;
          })
        : null}
    </div>
  );
}

export default NewStories;
