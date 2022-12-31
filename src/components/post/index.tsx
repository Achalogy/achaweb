import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import Blog from "../../interfaces/BlogInfo";

const BlogListed = ({id, title, date, description, tags}: Blog) => {

  const router = useRouter()

  const tagColors: any = {
    javascript: `text-yellow-600 bg-yellow-50 border-yellow-200`,
    react: `text-sky-600 bg-sky-50 border-sky-200`,
    css: `text-cyan-600 bg-cyan-50 border-cyan-200`,
    html: `text-orange-600 bg-orange-50 border-orange-200`,
    node: `text-green-600 bg-green-50 border-green-200`,
    typescript: `text-blue-600 bg-blue-50 border-blue-200`,
    express: `text-emerald-600 bg-emerald-50 border-emerald-200`,
    next: `text-stone-600 bg-stone-50 border-stone-200`,
    sass: `text-pink-600 bg-pink-50 border-pink-200`
  }

  return <div className="flex flex-col lg:flex-row justify-between lg:items-center bg-white hover:bg-zinc-50 p-3 rounded-lg cursor-pointer gap-2 lg:gap-0 dark:bg-darkMode-900 dark:drop-shadow-md dark:hover:bg-darkMode-800 dark:brightness-105"
    onClick={() => router.push(`/blog/${(id).split(".")[0]}`)}
    >
    <div>
      <h1 className="font-semibold text-sm lg:text-md dark:text-white">{title}</h1>
      <p className="text-xs text-zinc-400">{date}</p>
    </div>
    <div className="flex flex-row items-center gap-6 lg:justify-end">
      <div className="flex flex-row items-center dark:gap-0 gap-2 gap-y-0 flex-wrap justify-center">
        {tags && tags.map(x => 
          <p key={x} className={`py-1 px-3 border rounded-full text-xs ${tagColors[x]} dark:bg-transparent dark:border-none`}>{x}</p>
        )}
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="hidden lg:flex dark:text-zinc-200 mr-2"/>
    </div>
  </div>
}

export default BlogListed
