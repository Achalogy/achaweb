import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function Project() {

  const router = useRouter()

  return (
    <div className="flex flex-col px-6 py-10 gap-5 drop-shadow-xl rounded-lg bg-white justify-center items-center text-center w-1/2 lg:w-1/3 hover:bg-gray-50 cursor-pointer"
      onClick={() => window.open('https://github.com/achalogy/advent-js-2022', '_blank')}
      style={{
        aspectRatio: "5/5"
      }}
    >
      <div className="rounded-full bg-yellow-400 aspect-square w-20 flex items-center justify-center text-4xl text-white">
        <FontAwesomeIcon icon={faBookOpenReader}/>
      </div>
      <h1 className="font-semibold text-lg">Advent Js 2022 for newbies</h1>
      <p className="leading-5 text-sm">Step by Step analisis and explanation of Advent Js challenges.</p>
    </div>
  )
}