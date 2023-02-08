import { faBookOpenReader, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getProjectsLists from "../../api/projects/getProjectsList";

const Project = ({ name, stars, shortDescription, githubName }: any) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col px-4 py-10 gap-5 drop-shadow-xl rounded-lg bg-white dark:bg-darkMode-800 justify-center items-center text-center w-full lg:w-1/4 hover:bg-gray-50 cursor-pointer dark:text-white"
      onClick={() => router.push(`/projects/${githubName}`)}
      style={{
        aspectRatio: "10/11",
      }}
    >
      <div className="rounded-full bg-yellow-400 aspect-square w-20 flex items-center justify-center text-4xl text-white">
        <FontAwesomeIcon icon={faBookOpenReader} />
      </div>
      <h1 className="font-semibold text-lg">{name}</h1>
      <p className="leading-5 text-sm dark:text-zinc-400">{shortDescription}</p>
      {stars && (
        <p className="flex flex-row items-center gap-2 px-4 p-1 rounded-full border border-stone-600">
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellow-300 stroke-orange-300 stroke-[2em]"
          />
          {stars}
        </p>
      )}
    </div>
  );
};

export default function Projects() {
  const [projects, setProjects]: any[] = useState();

  const getProjects = async () => {
    const data = await getProjectsLists();
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {projects &&
        projects.map(({ name, stars, shortDescription, githubName }: any) => (
          <Project
            name={name}
            stars={stars}
            shortDescription={shortDescription}
            githubName={githubName}
          />
        ))}
    </>
  );
}
