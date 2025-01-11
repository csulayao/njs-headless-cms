"use client";

import { useState, useEffect } from 'react'
import { getAllProjectItems } from '@/lib/works';

import WorkCard from './WorkCard';

type WorkCardListProps = {
  data: [],
}

const WorkCardList = ({data}: WorkCardListProps) => {
  return (
    <div className="mt-5 work_layout cursor-pointer">
      {data.map((post) => (
        <WorkCard
          key={post.projectId}
          post={post}
          //handleTagClick={handleTagClick}
        />
      ))}
      {/* {data.map((post) => (
        JSON.stringify(post)
      ))} */}
    </div>
  )
}

//Get all the posts
export default async function Feed() {
  const [posts, setPosts] = useState([]);
  const allMenu = await getAllProjectItems();
  const allItems = allMenu
  console.log(allItems)

useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch('/lib/works');
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
