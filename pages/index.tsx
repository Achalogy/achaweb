import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "../src/components/project";
import MainLayout from "../src/layouts/main-layout";

export default function Home() {
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
      <div id="Projects" className="flex flex-col px-32 items-center h-screen justify-center">
        <h1 className="text-4xl font-semibold mb-4">Some of my Projects</h1>
        <p className="mb-12">I'm proud of these projects, take a look :D</p>
        <div className="flex py-8 gap-4 h-half items-center flex-wrap justify-center w-full">
          <Project />
        </div>
      </div>
    </MainLayout>
  )
}