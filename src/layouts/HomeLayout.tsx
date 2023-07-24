import Link from "next/link"
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

export default ({ children }: {
  children: any
}) => {
  const SocialMedia = () => <>
    <Link className="flex gap-2 no-underline opacity-25" href={"https://github.com/achalogy"} target="_blank">
      <AiOutlineGithub size={25} />
      <p className="hidden xl:flex">GitHub</p>
    </Link>
    <Link className="flex gap-2 no-underline opacity-25" href={"https://linkedin.com/in/achalogy"} target="_blank">
      <AiOutlineLinkedin size={25} />
      <p className="hidden xl:flex">LinkedIn</p>
    </Link>
  </>

  return <div className="relative flex flex-col justify-center min-h-screen">
    <header className="fixed top-0 flex justify-center gap-8 items-center h-[8vh] w-full xl:px-[5%] bg-slate-800 bg-opacity-[0.9] backdrop-blur-lg z-50">
      <div className="xl:flex-1">
        <h1 className="xl:flex xl:text-3xl font-sans font-semibold">Achalogy</h1>
      </div>
      <div className="flex items-center justify-center gap-[35%] xl:gap-[15%] h-full text-lg xl:text-xl">
        <SocialMedia />
      </div>
      <div className="xl:flex-1" />
    </header>
    <div className="flex-1 flex flex-col px-2 xl:px-4 pt-[8vh]">
      {children}
    </div>
    <footer className="flex flex-col gap-4 xl:gap-8 items-center bg-slate-900 p-4 xl:p-6">
      <p className="text-center text-lg">¿Tu que pones en el footer? 🤔</p>
      <div className="flex gap-4">
        <SocialMedia />
      </div>
    </footer>
  </div>
}