import getProps from "../../src/api/getProps";
import getProjectsList from "../../src/api/projects/getProjectsList";
import getProject from "../../src/api/projects/getProject.js";

export default function ProjectPage({ project }: any) {
  return <p>{JSON.stringify(project)}</p>;
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