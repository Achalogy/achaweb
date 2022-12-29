import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Blog from "../../interfaces/Blog";

const BlogListed = ({id, title, date, description, tags}: Blog) => {

  const tagColors: any = {
    javascript: `text-yellow-600 bg-yellow-50 border-yellow-200`,
    react: `text-sky-600 bg-sky-50 border-sky-200`,
    css: `text-cyan-600 bg-cyan-50 border-cyan-200`,
    html: `text-orange-600 bg-orange-50 border-orange-200`,
    node: `text-green-600 bg-green-50 border-green-200`,
    typescript: `text-blue-600 bg-blue-50 border-blue-200`,
    express: `text-emerald-600 bg-emerald-50 border-emerald-200`
  }

  return <div className="flex flex-col lg:flex-row justify-between lg:items-center bg-white hover:bg-zinc-50 p-3 rounded-lg cursor-pointer gap-2 lg:gap-0">
    <div>
      <h1 className="font-semibold text-sm lg:text-md">{title}</h1>
      <p className="text-xs text-zinc-400">{date}</p>
    </div>
    <div className="flex flex-row items-center gap-6 lg:justify-end w-full lg:w-2/6">
      <div className="flex flex-row items-center gap-2 flex-wrap">
        {tags && tags.map(x => 
          <p className={`py-1 px-3 border rounded-full text-xs ${tagColors[x]}`}>{x}</p>
        )}
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="hidden lg:flex"/>
    </div>
  </div>
}

export default BlogListed