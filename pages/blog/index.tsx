import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getBlogList from '../../src/api/blog/getBlogList';
import getMyVideos from "../../src/api/youtube/getMyVideos";
import BlogListed from "../../src/components/post";
import Blog from "../../src/interfaces/BlogInfo";
import Video from "../../src/interfaces/Video";
import BlogLayout from "../../src/layouts/blog.layout";
import Head from 'next/head'

export default function BlogPage({videos, blogs}:any) {
    return (
    <BlogLayout isBlog={false}>
      <Head>
        <title>AchaBlog</title>
        <meta name="description" content="Achalogy Deveveloper Blog" />

        <meta itemProp="name" content="AchaBlog" />
        <meta itemProp="description" content="Achalogy Deveveloper Blog" />

        <meta
          property="og:url"
          content={`https://achalogy.dev/blog/`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AchaBlog" />
        <meta property="og:description" content="Achalogy Deveveloper Blog" />
        <meta name="theme-color" content="#FF0000" />

        <meta name="twitter:title" content="AchaBlog" />
        <meta name="twitter:description" content="Achalogy Deveveloper Blog" />
      </Head>
      <title>AchaBlog</title>
      <div style={{flex: 1, maxWidth: "100vw"}} className="flex flex-col lg:flex-row justify-center px-4 lg:px-8 gap-10">
        <div className="lg:w-3/12 p-4 flex flex-col justify-between">
          <div >
            <h1 className="mb-4 font-semibold text-lg dark:text-white">Recent Videos</h1>
            <div className="flex flex-col gap-4">
              {videos && videos.slice(0, 5).map((video: Video) => 
              <div onClick={() => window.open(video.video, '_blank')} className="flex flex-row items-center cursor-pointer p-3 bg-white dark:bg-darkMode-900 hover:bg-zinc-50 dark:hover:bg-darkMode-800 justify-between px-4 rounded-md dark:drop-shadow-md dark:brightness-105">
                <FontAwesomeIcon icon={faYoutube} className="text-sm" color="red" />
                <p style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "90%"
              }} className="font-medium dark:text-white">{video.title}</p>
              </div>
            )}
            </div>
          </div>
          <footer className="text-xs text-zinc-300 hidden lg:flex flex-row gap-4">
            <p>© Achalogy 2023</p>
          </footer>
        </div>
        <div className="lg:w-6/12 p-4">
            <h1 className="mb-4 font-semibold text-lg dark:text-white">Recent Posts</h1>
            <div className="flex flex-col py-6 px-2 gap-2">
              {blogs && blogs.sort((a: any, b: any) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
              }).map((blog: Blog) => 
                <BlogListed key={blog.id} {...blog} />
              )}
            </div>
        </div>
      </div>
    </BlogLayout>
  )
}

export async function getStaticProps() {
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
      },
    };
}