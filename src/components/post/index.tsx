import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import Blog from "../../interfaces/BlogInfo";
import Tag from "../Tag";

const BlogListed = ({id, title, date, description, tags}: Blog) => {

  const router = useRouter()
  const options: any = { year: 'numeric', month: 'long', day: 'numeric' };

  return <div className="flex flex-col lg:flex-row justify-between lg:items-center bg-white hover:bg-zinc-50 p-3 rounded-lg cursor-pointer gap-2 lg:gap-0 dark:bg-darkMode-900 dark:drop-shadow-md dark:hover:bg-darkMode-800 dark:brightness-105"
    onClick={() => router.push(`/blog/${(id).split(".")[0]}`)}
    >
    <div>
      <h1 className="font-semibold text-sm lg:text-md dark:text-white">{title}</h1>
      <p className="text-xs text-zinc-400">{new Date(date).toLocaleDateString(undefined, options)}</p>
    </div>
    <div className="flex flex-row items-center gap-6 lg:justify-end">
      <div className="flex flex-row items-center gap-2 gap-y-0 flex-wrap justify-center">
        {tags && tags.map(tag => 
          <Tag str={tag} />
        )}
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="hidden lg:flex dark:text-zinc-200 mr-2"/>
    </div>
  </div>
}

export default BlogListed
