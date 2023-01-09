import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Project() {

  return (
    <div className="flex flex-col px-4 py-10 gap-5 drop-shadow-xl rounded-lg bg-white dark:bg-darkMode-800 justify-center items-center text-center w-full lg:w-1/4 hover:bg-gray-50 cursor-pointer dark:text-white"
      onClick={() => window.open('https://github.com/achalogy/advent-js-2022', '_blank')}
      style={{
        aspectRatio: "10/11"
      }}
    >
      <div className="rounded-full bg-yellow-400 aspect-square w-20 flex items-center justify-center text-4xl text-white">
        <FontAwesomeIcon icon={faBookOpenReader}/>
      </div>
      <h1 className="font-semibold text-lg">Advent Js 2022 for newbies</h1>
      <p className="leading-5 text-sm dark:text-zinc-400">Step by Step analisis and explanation of Advent Js challenges.</p>
    </div>
  )
}