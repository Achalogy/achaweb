import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import getBlogList from "../src/api/blog/getBlogList";
import getMyVideos from "../src/api/youtube/getMyVideos";
import Project from "../src/components/project";
import VideoComponent from "../src/components/video";
import Video from "../src/interfaces/Video";
import MainLayout from "../src/layouts/main.layout";

export default function Home({ _videos }: any) {

  return(
    <MainLayout>
      <title>Achalogy</title>
      <div id="Achalogy" className="flex flex-col gap-3 justify-center items-center h-screen">
        <h1 className="text-6xl font-normal dark:text-white">Achalogy</h1>
        <p className="text-gray-400 line tracking-widest text-2xl">Software Developer</p>
        <button className="flex flex-row items-center rounded-lg px-3 py-1 border-gray-400 border gap-2 text-gray-300">
          <p className="font-medium">Resume</p>
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>
      <div id="Projects" className="flex flex-col text-center px-4 lg:px-32 items-center justify-center py-8 min-h-screen">
        <h1 className="text-4xl font-semibold mb-4 dark:text-white">Some of my Projects</h1>
        <p className="mb-12 dark:text-white">I'm proud of these projects, take a look :D</p>
        <div className="flex p-12 gap-10 items-center flex-wrap justify-center w-full">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      <div id="YouTube" className="flex flex-col justify-center items-center min-h-screen bg-slate-100 dark:bg-darkMode-800 text-center py-8">
        <h1 
          onClick={() => window.open('https://youtube.com/@Achalogy', '_blank')}
          className="text-4xl font-semibold mb-20 cursor-pointer hover:text-red-500 dark:text-white">My Youtube Channel <FontAwesomeIcon color="red" icon={faYoutube} /></h1>
        <div className="flex flex-row w-full justify-center gap-5 px-15 flex-wrap">
          {_videos && _videos.slice(0, 3).map((video: Video) => 
            <VideoComponent title={video.title} key={video.video} video={video.video} id={video.id} />
          )}
        </div>
      </div>
    </MainLayout>
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