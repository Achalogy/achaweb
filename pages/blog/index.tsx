import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Video from "../../src/interfaces/Video";
import BlogLayout from "../../src/layouts/blog.layout";
import getBlogList from '../../src/api/blog/getBlogList'
import Blog from "../../src/interfaces/Blog";
import BlogListed from "../../src/components/post";

export default function BlogPage({videos, blogs}:any) {
  console.log(blogs)
  return (
    <BlogLayout>
      <title>AchaBlog</title>
      <div style={{flex: 1}} className="flex flex-col lg:flex-row justify-center px-4 lg:px-12 gap-10">
        <div className="lg:w-3/12 p-4 flex flex-col justify-between">
          <div>
            <h1 className="mb-4 font-semibold text-lg">Recent Videos</h1>
            <div className="flex flex-col gap-4">
              {videos && videos.slice(0, 5).map((video: Video) => 
              <div onClick={() => window.open(video.video, '_blank')} className="flex flex-row items-center cursor-pointer p-3 bg-white hover:bg-zinc-50 justify-between px-4 rounded-md">
                <FontAwesomeIcon icon={faYoutube} className="text-sm" color="red" />
                <p style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "90%"
              }} className="font-medium">{video.title}</p>
              </div>
            )}
            </div>
          </div>
          <footer className="text-xs text-zinc-300 hidden lg:flex flex-row gap-4">
            <p>© Achalogy 2023</p>
          </footer>
        </div>
        <div className="lg:w-6/12 p-4">
            <h1 className="mb-4 font-semibold text-lg">Recent Posts</h1>
            <div className="flex flex-col py-6 px-2 gap-2">
              {blogs && blogs.map((blog: Blog) => 
                <BlogListed {...blog} />
              )}
            </div>
        </div>
      </div>
    </BlogLayout>
  )
}