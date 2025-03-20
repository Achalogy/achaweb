import { useEffect, useState } from "react";
import KnowledgeLevel from "./KnowledgeLevel";
// import DefaultSeo from "src/defaultSeo"; 

const CVSection = ({ id, name, children }: {
  id: string;
  name: string;
  children?: JSX.Element | any;
}) => {
  return <section className="flex w-full" id={id}>
    <div className="hidden w-1/4 md:flex h-full items-start justify-end py-8">
      <h2 className="text-xl font-semibold text-slate-400">{name}</h2>
    </div>
    <div className="flex flex-col gap-2 w-full md:w-3/4 px-[5%] md:p-8">
      {children}
    </div>
  </section>
}

interface Tree {
  [key: string]: {
    name: string,
    subtitles: Subtitle
  }
}

interface Subtitle {
  [key: string]: {
    name: string
  }
}

export default ({
  projects = []
}: {
  projects: any[]
}) => {

  const [tree, setTree] = useState<Tree>()

  useEffect(() => {
    let _tree: Tree = {}

    const titles = document.querySelectorAll(".cv h2")

    titles.forEach(e => {
      const id: string = "" + e.parentElement?.parentElement?.id

      _tree[id] = {
        name: "" + e.textContent,
        subtitles: {}
      }

      const subtitles = document.querySelectorAll(`#${id} h3`)

      if (subtitles.length == 0) return;
      subtitles.forEach(s => _tree[id].subtitles[s.id] = { name: "" + s.textContent })
    })

    setTree(_tree)
  }, [])

  return <div className="flex min-h-screen py-8 text-xs xl:text-base w-full">
    {/* <DefaultSeo /> */}
    <div className="cv flex flex-col w-full md:w-4/5 h-full">
      <p className="w-[95%] text-center text-xs md:hidden text-red-400 bg-red-200 px-2 p-1 rounded mx-auto mb-4 bg-opacity-30">Not Optimized for Mobile</p>
      <CVSection id="details" name="Details">
        <p className="mb-[2%] text-sm md:text-base text-slate-400">Bogotá, Colombia | acha@achalogy.dev</p>
        <p className="text-2xl md:text-4xl font-bold">Miguel Francisco Vargas Contreras</p>
        <p className="text-slate-400">A 19 years old self-taught Software/Web Developer from Colombia. PUJ Student 4th Semester.</p>
      </CVSection>
      <CVSection id="contact" name="Contact">
        <p className="text-black dark:text-slate-400">acha@achalogy.dev | achalogy@gmail.com</p>
        {/* <p className="text-black">Cel. +57 </p> */}
      </CVSection>
      <CVSection id="projects" name="Projects">
        <div>
          <h3 className="text-2xl font-semibold mb-1" id="webpage">Current Proyects</h3>
          <p className="p-2">Hey, what's up? I'm currently working on some test projects using TailwindCSS, Astro, TypeScript, Prisma, PostgreSQL, MongoDB, C#, Protobufs, NestJS, and ExpressJS. I'll be updating this page soon as I deploy my projects.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-1" id="webpage">Personal Page</h3>
          <p className="p-2">
            I built this personal website from scratch. You can check out the repo on{" "}
            <a href="https://github.com/Achalogy/achaweb" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>.
          </p>
        </div>
        {projects.map(p => {
          const { frontmatter } = p

          return <div key={frontmatter.name}>
            <h3 className="text-2xl font-semibold mb-1" id={frontmatter.name}>{frontmatter.name}</h3>
            <div className="markdw" dangerouslySetInnerHTML={{
              __html: p.content
            }}>
            </div>
          </div>
        })}
      </CVSection>
      <CVSection id="education" name="Education">
        <div>
          <h3 id="undergraduate" className="text-base xl: md:text-2xl font-semibold mb-1">Undergraduate - Systems Engineering, Pontificia Universidad Javeriana</h3>
          <div className="px-2">
            <p className="text-slate-400 font-semibold text-sm md:text-base">2023 - </p>
            <p className="text-slate-400 text-sm md:text-base">Undergraduate details <a href="https://www.javeriana.edu.co/carrera-ingenieria-de-sistemas" target="_blank">here</a></p>
          </div>
        </div>
        <div>
          <h3 id="bachelor" className="text-base xl: md:text-2xl font-semibold mb-1">High School, Salesiano Maldonado, Tunja</h3>
          <p className="text-slate-400 font-semibold p-2 text-sm md:text-base">2016 - 2022</p>
        </div>
        <div>
          <h3 id="jsfreecodecamp" className="text-base xl: md:text-2xl font-semibold mb-1">Javascript Algoritms and Data Structures, freeCodeCamp</h3>
          <div className="p-2">
            <p className="text-slate-400 font-semibold text-sm md:text-base">May 2022</p>
            <p className="text-slate-400 text-sm md:text-base">Verify this certification at <a href="https://freecodecamp.org/certification/Achalogy/javascript-algorithms-and-data-structures" target="_blank">freeCodeCamp.org</a></p>
          </div>
        </div>
        <div>
          <h3 id="minticpy" className="text-base xl: md:text-2xl font-semibold mb-1">Programming Fundamentals with Python, TIC Ministry, Colombia</h3>
          <p className="text-slate-400 font-semibold p-2">Feb 2021</p>
        </div>
      </CVSection>
      <CVSection id="skills" name="Skills/Languages">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold mb-1" id="programming">Programming Languages / Frameworks / Libs / Tools</h3>
          <div className="p-2">
            <KnowledgeLevel name="Javascript" level={4} />
            <KnowledgeLevel name="Typescript" level={4} />
            <KnowledgeLevel name="C++" level={2} />
            {/* <KnowledgeLevel name="Python" level={2} /> */}
            {/* <KnowledgeLevel name="React JS Native" level={1} /> */}
            <KnowledgeLevel name="Express JS" level={2} />
            <KnowledgeLevel name="MongoDB" level={1} />
            <KnowledgeLevel name="Tailwind CSS" level={3} />
            <KnowledgeLevel name="Astro" level={3} />
            <KnowledgeLevel name="React JS" level={3} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold mb-1" id="langs">Languages</h3>
          <div className="p-2">
            <KnowledgeLevel customText="Native" name="Spanish" level={4} />
            <KnowledgeLevel name="English" level={3} />
            {/* <KnowledgeLevel name="French" level={1} /> */}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold mb-1" id="soft-skills">Soft Skills</h3>
          <div className="p-2">
            <KnowledgeLevel name="Fast Learner" level={4} />
            <KnowledgeLevel name="Problem Solver" level={3} />
            <KnowledgeLevel name="Teamwork" level={3} />
            <KnowledgeLevel name="Time managment" level={3} />
          </div>
        </div>
      </CVSection>
    </div >

    <div className="hidden md:fixed md:flex flex-col right-0 top-0 p-8 m-2 w-1/5 py-[5%]">
      <ul className="flex flex-col gap-2">
        {tree && Object.keys(tree).map(t =>
          <li className="text-sm">
            <a className="no-underline text-slate-400 hover:text-slate-300" href={`#${t}`}>{tree[t].name}</a>
            {!!Object.keys(tree[t].subtitles).length &&
              <ul className="flex flex-col gap-2 px-2 py-1">
                {Object.keys(tree[t].subtitles).map(s =>
                  <li className="text-xs">
                    <a className="no-underline text-slate-400 hover:text-slate-300" href={`#${s}`}>{tree[t].subtitles[s].name}</a>
                  </li>
                )}
              </ul>
            }
          </li>
        )}
      </ul>
    </div>
  </div >
}