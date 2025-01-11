import Link from "next/link";
import { draftMode } from "next/headers";

import { getAllMenuItems, getAllPosts } from "@/lib/api";
import Feed from "@/components/Feed";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
        <section className="w-full flex-center flex-col mt-10">
        <h1 className="head_text text-center border-t-slate-800">
            Explore and Wonder
            <br className="max-md:hidden"/>
            <br />

        </h1>
        <h2 className="head2_text text-center indigo_gradient">CMS-Powered Portfolio</h2>
        <p className="desc text-center">This site is a Contentful, NextJS and Tailwind project to showcase the body of work by Carlo Sulayao of D-Kolektiv, Inc.</p>
            {/* <Feed/> */}
    </section>
  );
}
