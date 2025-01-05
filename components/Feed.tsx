"use client";

import { useState, useEffect } from 'react'

import WorkCard from './WorkCard';

type WorkCardListProps = {
  data: string,
  handleTagClick: string
}

const WorkCardList = ({data, handleTagClick}:WorkCardListProps) => {
  return (
    <div className="mt-5 work_layout cursor-pointer">
      {data.map((post) => (
        <WorkCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
      {/* {data.map((post) => (
        JSON.stringify(post)
      ))} */}
    </div>
  )
}

const Feed = () => {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch('/api/works');
    const data = await response.json();

    setPosts(data);
  }
  fetchPosts();
}, []);

  return (
    <section className="feed">
      <WorkCardList 
        data={posts}
      />

    </section>
  )
}

export default Feed