import React, { useState, useEffect } from "react";
import axios from "axios";
import PastStory from "./pastStory";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const NewStoriesUrl = `${baseUrl}newstories.json`;

function PastStories() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    const getPastStories = async () => {
      const pastStoryIds = await axios
        .get(NewStoriesUrl)
        .then((res) => res.data)
        .then((data) => setStoryIds(data));
      return pastStoryIds;
    };
    getPastStories();
  }, []);

  return (
    <div>
      {storyIds && storyIds.length > 0
        ? storyIds.map((storyId, index) => {
            return <PastStory key={index} storyId={storyId} />;
          })
        : null}
    </div>
  );
}

export default PastStories;
