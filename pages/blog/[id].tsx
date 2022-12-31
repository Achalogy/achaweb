import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import getBlog from "../../src/api/blog/getBlog"
import getBlogInfo from "../../src/api/blog/getBlogInfo"
import BlogLayout from "../../src/layouts/blog.layout";
import BlogSEO from "../../src/components/Blog/SEO";
import BlogInfo from "../../src/interfaces/BlogInfo";
import MarkdownComponents from "../../src/components/Blog/MarkdownComponents";

export default function BlogPost({ blog, info }: {
  blog: string,
  info: BlogInfo
}) {

  const options: any = { year: 'numeric', month: 'long', day: 'numeric' };  

  return(
    <BlogLayout>
      <BlogSEO info={info} />
      <div className="flex flex-col items-center">
        <div className="flex flex-col text-xs lg:items-center mb-4 w-full px-4 lg:px-0 lg:w-7/12">
          <h1 className="mt-4 text-4xl font-semibold dark:text-white text-center">{info.title}</h1>
          <p className="dark:text-zinc-400 mb-3">{new Date(info.date).toLocaleDateString(undefined, options)}</p>
        </div>
        <div className="flex flex-col react-markdown w-full px-6 lg:px-0 lg:w-6/12">
          <ReactMarkdown children={blog} remarkPlugins={[remarkGfm]} components={MarkdownComponents} />
        </div>
      </div>
    </BlogLayout>
  )
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const blog = await (await getBlog(id)).split("\n").slice(3).join("\n")
  const info = await getBlogInfo(id)

  return {
    props: {blog, info}
  }
}