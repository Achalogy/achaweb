import { FaPaw } from 'react-icons/fa'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { TbChristmasTree } from 'react-icons/tb'

import { AiOutlineClockCircle } from 'react-icons/ai'
import FullImage from "src/components/FullImage"

import { IconType } from 'react-icons'
import { IProject } from 'src/models/IProject'

export default ({ title, description, image, tags, time, icon, url }: IProject) => {

  const Icons: { [key: string]: IconType } = {
    "FaPaw": FaPaw,
    "BsFillBookmarkStarFill": BsFillBookmarkStarFill,
    "TbChristmasTree": TbChristmasTree
  }

  const BigIcon = Icons[icon]

  const TagComponent = ({ text, Icon }: {
    text: string,
    Icon?: IconType
  }) => <p className={`flex items-center gap-2 text-xs px-2 p-1 rounded-full border border-white border-opacity-10 ${Icon ? "pr-3" : ""}`}>
      {Icon && <Icon className='text-base' />}
      {text}
    </p>

  const TagsListComponent = ({ mobile }: { mobile?: boolean }) => <div className={`${mobile ? "xl:hidden " : "hidden xl:"}flex gap-2 flex-wrap`}>
    <TagComponent text={time} Icon={AiOutlineClockCircle} />
    {tags.map(tag => <TagComponent text={tag} />)}
  </div>

  return <div className="flex flex-col xl:flex-row gap-2 xl:gap-6 relative bg-slate-900 p-5 xl:p-7 w-[90%] rounded-md">
    <div className="absolute -left-4 xl:-left-6 -top-4 xl:-top-6">
      <BigIcon className="text-[2rem] xl:text-[3rem]" />
    </div>
    <div className="w-full xl:w-[35%] aspect-video bg-slate-800 bg-opacity-25 rounded-md overflow-hidden">
      <a href={url} target='_blank'>
        <FullImage src={image} cover />
      </a>
    </div>
    <TagsListComponent mobile />
    <div className="xl:w-[65%] flex flex-col gap-2 xl:gap-4 xl:py-4">
      <h3 className="xl:text-3xl font-black tracking-wide">
        <a href={url} target='_blank' className='no-underline font-black'>{title}</a>
      </h3>
      <p className="text-[0.85rem] xl:text-lg">{description}</p>
      <TagsListComponent />
    </div>
  </div>
}