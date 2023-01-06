import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import getBlog from "../../src/api/blog/getBlog"
import getBlogInfo from "../../src/api/blog/getBlogInfo"
import BlogLayout from "../../src/layouts/blog.layout";
import BlogSEO from "../../src/components/Blog/SEO";
import BlogInfo from "../../src/interfaces/BlogInfo";
import MarkdownComponents from "../../src/components/Blog/MarkdownComponents";
import getMyVideos from "../../src/api/youtube/getMyVideos";
import getBlogList from "../../src/api/blog/getBlogList";

export default function BlogPost({ blog, info }: {
  blog: string,
  info: BlogInfo
}) {

  const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
  let date = new Date(info.date)

  return(
    <BlogLayout isBlog>
      <BlogSEO info={info} />
      <div className="flex flex-col items-center w-full" style={{maxWidth: "100vw"}}>
        <div className="flex flex-col text-xs lg:items-center mb-4 w-full px-4 lg:px-0 lg:w-7/12">
          <h1 className="mt-4 text-4xl font-semibold dark:text-white text-center mb-2">{info.title}</h1>
          <p className="dark:text-zinc-400 mb-3 text-center">{date.toLocaleDateString(undefined, options)}</p>
        </div>
        <div className="flex flex-col react-markdown w-full px-6 lg:px-0 lg:w-1/2">
          <ReactMarkdown children={blog} remarkPlugins={[remarkGfm]} components={MarkdownComponents} />
        </div>
      </div>
    </BlogLayout>
  )
}

export async function getStaticPaths() {
  const blogs = await getBlogList()
  let blogList = await blogs.map((b: BlogInfo) => {
    return {
      params: {
        id: b.id
      }
    }
  })
  return {
    paths: blogList,
    fallback: true,
  };
};

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const blog = await (await getBlog(id)).split("\n").slice(3).join("\n");
  const info = await getBlogInfo(id);

  let _videos = await getMyVideos();
  let videos = await _videos.map((v: any) => {
    return {
      id: v.id,
      name: v.title,
      section: "YouTube",
      onlyOnSearch: true,
      isVideo: true,
    };
  });

  return {
    props: {
      videos: await videos,
      _videos: _videos,
      blogs: await getBlogList(),
      blog,
      info,
    },
  };
}