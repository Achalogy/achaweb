import Image from "next/image";
import Video from "../../interfaces/Video";

export default function VideoComponent({ title, video, id }: Video) {
  let miniature = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`

  return(
    <div
      onClick={() => window.open(video, '_blank')}
      className="w-10/12 lg:w-1/4 bg-white rounded-lg drop-shadow-md cursor-pointer hover:brightness-110">
      <div className="aspect-video bg-gray-300 relative overflow-hidden">
        <Image src={miniature} fill alt={title}/>
      </div>
      <div className="p-4 text-center">
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  )
}