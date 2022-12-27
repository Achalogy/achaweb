import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "../src/components/project";
import Video from "../src/components/video";
import MainLayout from "../src/layouts/main-layout";

export default function Home() {

    // Pronto Backend o alguna forma de fetchear los videos
  const videos = [
    {
      title: "Advent Js 2022 | 5: Optimizando viajes de Santa",
      video: "https://youtu.be/BcpHWwe0ZIE"
    },
    {
      title: "Advent Js 2022 | 6: Creando adornos navideños",
      video: "https://youtu.be/-d93s9GGr0I"
    },
    {
      title: "Advent Js 2022 | 7: Haciendo inventario de regalos",
      video: "https://youtu.be/aRxTAaMZhvA"
    }
  ]

  return(
    <MainLayout>
      <div id="Achalogy" className="flex flex-col gap-3 justify-center items-center h-screen">
        <h1 className="text-6xl font-normal">Achalogy</h1>
        <p className="text-gray-400 line tracking-widest text-2xl">Software Developer</p>
        <button className="flex flex-row items-center rounded-lg px-3 py-1 border-gray-400 border gap-2 text-gray-300">
          <p className="font-medium">Resume</p>
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>
      <div id="Projects" className="flex flex-col text-center px-4 lg:px-32 items-center min-h-screen justify-center py-8">
        <h1 className="text-4xl font-semibold mb-4">Some of my Projects</h1>
        <p className="mb-12">I'm proud of these projects, take a look :D</p>
        <div className="flex py-8 lg:gap-4 h-half items-center flex-wrap justify-center w-full">
          <Project />
        </div>
      </div>
      <div id="YouTube" className="flex flex-col justify-center items-center min-h-screen bg-slate-100 text-center py-8">
        <h1 
          onClick={() => window.open('https://youtube.com/@Achalogy', '_blank')}
          className="text-4xl font-semibold mb-20 cursor-pointer hover:text-red-500">My Youtube Channel <FontAwesomeIcon color="red" icon={faYoutube} /></h1>
        <div className="flex flex-row w-full justify-center gap-5 px-20 flex-wrap">
          {videos.map(video => 
            <Video title={video.title} key={video.video} video={video.video} />
          )}
        </div>
      </div>
    </MainLayout>
  )
}