import { useEffect, useState } from "react";
import KnowledgeLevel from "../../src/components/KnowledgeLevel";
import DefaultSeo from "src/defaultSeo";

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

export default () => {

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

  return <div className="flex min-h-screen py-8 text-xs xl:text-base">
    <DefaultSeo />
    <div className="cv flex flex-col w-full md:w-4/5 h-full">
      <p className="w-[95%] text-center text-xs md:hidden text-red-400 bg-red-200 px-2 p-1 rounded mx-auto mb-4 bg-opacity-30">Not Optimized for Mobile</p>
      <CVSection id="details" name="Details">
        <p className="mb-[2%] text-sm md:text-base text-slate-400">Tunja, Colombia | acha@achalogy.dev</p>
        <p className="text-2xl md:text-4xl font-bold">Miguel Francisco Vargas Contreras</p>
        <p className="text-slate-400">A 17 years old autodidact Software/Web Developer from Colombia.</p>
      </CVSection>
      <CVSection id="education" name="Education">
        <div>
          <h3 id="bachelor" className="text-base xl: md:text-2xl font-semibold mb-1">Bachiller, Salesiano Maldonado, Tunja</h3>
          <p className="text-slate-400 font-semibold p-2 text-sm md:text-base">2016 - 2022</p>
        </div>
        <div>
          <h3 id="jsfreecodecamp" className="text-base xl: md:text-2xl font-semibold mb-1">Javascript Algoritms and Data Structures, freeCodeCamp</h3>
          <div className="p-2">
            <p className="text-slate-400 font-semibold text-sm md:text-base">May 2022</p>
            <p className="text-slate-400 text-sm md:text-base">Verify this certification at <a href="https://freecodecamp.org/certification/Achalogy/javascript-algorithms-and-data-structures">freeCodeCamp.org</a></p>
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
            <KnowledgeLevel name="Python" level={2} />
            <KnowledgeLevel name="React JS / Next JS" level={3} />
            <KnowledgeLevel name="React JS Native" level={1} />
            <KnowledgeLevel name="Tailwind CSS" level={2} />
            <KnowledgeLevel name="Express JS" level={2} />
            <KnowledgeLevel name="MongoDB" level={1} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold mb-1" id="langs">Languages</h3>
          <div className="p-2">
            <KnowledgeLevel name="Spanish" level={4} />
            <KnowledgeLevel name="English" level={3} />
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
      <CVSection id="projects" name="Projects">
        <div>
          <h3 className="text-2xl font-semibold mb-1" id="webpage">Personal Page</h3>
          <p className="p-2">I made this personal web page from scratch, You can check the repo in <a href="https://github.com/Achalogy/achaweb">Github</a>.</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold mb-1" id="adventjs2022">Advent JS 2022 - Explicado para principiantes</h3>
          <div className="flex flex-col gap-3 md:gap-2 p-2 text-base xl:text-lg">
            <p>Explanations of technical programming exercises, step by step and in video.</p>

            <p>The main idea was to create a Github repository where the answers to technical programming challenges would be published, but with an educational technical challenges, but with an educational approach, for people who are just starting to learn learning JavaScript, algorithms or just want to understand the solutions to them. solutions to them. Currently, the project is scaling up to an audiovisual medium and the explanations are being published on YouTube. explanations on YouTube.</p>

            <p>You can check it here: <a href="https://github.com/achalogy/advent-js-2022">AdventJS repo</a>.</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold mb-1" id="icfes">(Name in progress) Icfes Achalogy</h3>
          <div className="flex flex-col gap-4 md:gap-3 p-2 text-base xl:">
            <p>Interactive platform to prepare for the university entrance exam in Colombia called ICFES.</p>

            <p>The objective of this platform is to encourage the preparation of 11th grade students, who are about to complete their high school studies and will soon enter university.</p>

            <p>Although the main focus of the website is the ICFES, it has texts, materials, tests and more to practice many of the important skills of Mathematics, English, Critical Reading, Social and Natural Sciences, as well as subtopics of these subjects. Among some of these is the preparation for the National University exam.</p>

            <p>This project is in process, currently in version v1.0.0.0 and is expected to have a renewed and updated version by July 2023, with one of its most interesting functions: Artificial Intelligence.</p>

            <p>You can check it here: <a href="https://icfes.achalogy.dev/">Icfes Achalogy (We're moving)</a>.</p>
          </div>
        </div>
      </CVSection>
      D</div >

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