import getProps from "../../src/api/getProps";
import getProjectsList from "../../src/api/projects/getProjectsList";
import getProject from "../../src/api/projects/getProject.js";
import Project from "../../src/interfaces/Project";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import Tag from "../../src/components/Tag";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useRouter } from "next/router";

export default function ProjectPage({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <>
      {project && (
        <div className="flex flex-col items-center dark:text-white">
          <header className="flex flex-col gap-8 justify-between items-center bg-gray-100 dark:bg-darkMode-800 drop-shadow-sm p-8 md:min-h-[35vh] w-full">
            <div className="flex flex-row justify-between w-full">
              <div>
                <h1 className="flex flex-row flex-wrap gap-2 items-center font-semibold text-sm md:text-xl mb-4">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => router.back()}
                    className="aspect-square bg-white bg-opacity-0 hover:bg-opacity-20 cursor-pointer rounded-full p-2"
                  />
                  {project.name}{" "}
                  <>
                    {project.languages.map((lang) => (
                      <Tag str={lang} />
                    ))}
                  </>
                </h1>
                <p className="dark:text-gray-300 text-xs md:text-base">
                  {project.shortDescription}
                </p>
              </div>

              <div>
                <div className="flex flex-col md:flex-row gap-4 text-center items-center">
                  <a
                    href={project.repo}
                    target="_blank"
                    className="text-xs md:text-base"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Github
                  </a>
                  <p className="flex flex-row items-center gap-2 px-4 p-1 rounded-full border border-stone-600 text-xs md:text-base">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300 stroke-orange-300 stroke-[2em]"
                    />
                    {project.stars}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-2 justify-center">
              {project.tags?.map((topic: any) => (
                <Tag str={topic} />
              ))}
            </div>
          </header>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="react-markdown py-24 px-2 w-full md:w-2/3"
            remarkPlugins={[remarkGfm]}
          >
            {project.readme}
          </ReactMarkdown>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const projects = await getProjectsList();
  const projectList = await projects.map((p: any) => {
    return {
      params: {
        id: p.githubName,
      },
    };
  });
  return {
    paths: projectList,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const project = await getProject(id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await getProps()).props,
      project,
    },
    revalidate: 900,
  };
}
