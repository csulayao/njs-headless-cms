"use client"

import { getAllProjectItems } from '@/lib/works';
import Image from "next/image";
import Link from "next/link";

//import WorkCard from './WorkCard';

// type WorkCardListProps = {
//   data: [],
// }

// const WorkCardList = ({data}: WorkCardListProps) => {
//   return (
//     <div className="mt-5 work_layout cursor-pointer">
//       {data.map((post) => (
//         <WorkCard
//           key={post.projectId}
//           post={post}
//           //handleTagClick={handleTagClick}
//         />
//       ))}
//       {/* {data.map((post) => (
//         JSON.stringify(post)
//       ))} */}
//     </div>
//   )
// }

type imageLoaderProps = {
  src: string,
  width: number,
  quality: number
}
const imageLoader = ({ src, width, quality}: imageLoaderProps) => {
  return `${src}?w=${width}}&q=${quality || 99}`
}

//Get all the posts
export default async function Feed() {
  //const [posts, setPosts] = useState([]);
  const allProjects = await getAllProjectItems();
  const allItems = allProjects
  console.log(allItems)

// useEffect(() => {
//   const fetchPosts = async () => {
//     const response = await fetch('/lib/works');
//     const data = await response.json();

//     setPosts(data);
//   }
//   fetchPosts();
// }, []);

  return (
    <section className="feed">
      <div className="mt-5 work_layout cursor-pointer">
         {allItems.map((projects) => (
            <div className="work_card">
              <div className="flex justify-between items-start gap-5">
                <div className="flex justify-start items-center gap-3">
                    <div className="flex flex-col align-top">
                      <h3 className="font-satoshi font-semibold text-indigo-950">
                        {projects.projectName}
                      </h3>
                      <p className="font-inter text-sm text-gray-500 cursor-pointer">
                        <Link href={projects.projectUrl} target="_blank" rel="noopener noreferrer" title={projects.projectName}>{projects.projectUrl}</Link>
                      </p>
                      <Image
                        key={projects.projectId} 
                        src={projects.projectImageCollection.items[0].url}
                        width={400}
                        height={700}
                        alt={projects.projectName}
                        className="pt-5"
                        unoptimized={true} loader={() => `"${projects.projectImageCollection[0].url}"`}
                      />
                    </div>
                </div>
              </div>
              <p className="font-inter text-sm tag_gradient pt-3">
                {/* {projects.projectTag} */}
                {projects.projectTag.map((tag:string) => (
                  <span>{tag}&nbsp;</span>
                ))}
              </p>
          </div>
      ))}
    </div>

    </section>
  )
}
