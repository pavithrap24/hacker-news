import React, { useState, useEffect } from "react";
import axios from "axios";
import TopStory from "./topStory";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const topStoriesUrl = `${baseUrl}topstories.json`;

function TopStories() {
  const [storyIds, setStoryIds] = useState([]);

  const getTopStories = async () => {
    const topStoryIds = await axios
      .get(topStoriesUrl)
      .then((res) => res.data)
      .then((data) => setStoryIds(data));
    return topStoryIds;
  };

  useEffect(() => {
    getTopStories();
  }, []);

  return (
    <div>
      {storyIds && storyIds.length > 0
        ? storyIds.map((storyId, index) => {
            return <TopStory key={index} storyId={storyId} />;
          })
        : null}
    </div>
  );
}

export default TopStories;
