"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WorkCard = ({post, handleTagClick, handleEdit, handleDelete}) => {

  return (
    <div className="work_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex justify-start items-center gap-3">
            <div className="flex flex-col align-top">
              <h3 className="font-satoshi font-semibold text-indigo-950">
                {post.worktitle}
              </h3>
              <p className="font-inter text-sm text-gray-500 cursor-pointer">
                <Link href={post.workurl} target="_blank" rel="noopener noreferrer">{post.workurl}</Link>
              </p>
              <Image 
                src={post.workimg}
                width={400}
                height={700}
                alt="placeholder_image"
                className="pt-5"
              />
            </div>
        </div>
      </div>
      <p className="font-inter text-sm tag_gradient pt-3"
        onClick={() => handleTagClick && handleTagClick(post.tag)}>
        {post.tag}
      </p>
    </div>
  )
}

export default WorkCard