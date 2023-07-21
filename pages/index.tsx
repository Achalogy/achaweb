import Link from "next/link"
import ProjectComponent from "src/components/ProjectComponent"
import DefaultSeo from "src/defaultSeo"
import HomeLayout from "src/layouts/HomeLayout"
import { IProject } from "src/models/IProject"

export default ({ projects }: {
  projects: IProject[]
}) => {

  return <HomeLayout>
    <DefaultSeo />
    <div className="flex flex-col justify-center gap-4 items-center h-[20vh] xl:h-[92vh] xl:pb-[8vh]">
      <div className="flex flex-col gap-2">
        <p className="text-6xl xl:text-8xl font-black tracking-wide text-teal-300">HI!</p>
        <p className="text-xl xl:text-6xl font-semibold">I'm acha, <span className="font-black text-teal-300">web</span> developer :D</p>
      </div>
      <Link className="rounded-full px-8 p-1 border border-white no-underline hover:bg-white hover:bg-opacity-20" href={"/cv"}>Ver CV</Link>
    </div>
    <div className="flex flex-col gap-8 py-8 items-center">
      {/* <p className="text-slate-900 font-black drop-shadow-[0_0px_10px_rgba(255,255,255,0.25)] text-4xl xl:text-8xl opacity-[0.05] hover:text-black">Projects</p> */}
      {projects.map(project =>
        <ProjectComponent {...project} />
      )}
    </div>
  </HomeLayout>
}

export async function getStaticProps() {
  const isDev = process.env.NODE_ENV === "development"

  const projects = await (await fetch(
    `${isDev ? "http://localhost:3000" : "https://achalogy.dev"}/api/projects`
  )).json()

  return {
    props: {
      projects
    },
    revalidate: 15
  }
}