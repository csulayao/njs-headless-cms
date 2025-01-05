"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const WorkCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () =>{
    if(post.creator._id === session?.user.id) return router.push("/profile");

      //router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    window.open(post.workurl,'_blank');

  }

  const handleCopy = () => {
    setCopied(post.workurl);
    navigator.clipboard.writeText(post.workurl);
    setTimeout(() => setCopied(""), 3000);
  }

  return (
    <div className="work_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex justify-start items-center gap-3" 
          onClick={handleProfileClick}
          >
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
      {session?.user.id === post.creator._id && pathName === '/profile' &&
        (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p 
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={handleEdit}>
              Edit
            </p>
            <p 
              className="font-inter text-sm text-gray-500 cursor-pointer"
              onClick={handleDelete}>
              Delete
            </p>
          </div>
        )
      }
    </div>
  )
}

export default WorkCard