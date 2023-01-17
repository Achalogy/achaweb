const getProjectsLists = async () => {
  return await fetch("https://back-achaweb.vercel.app/projects/list").then(
    (x) => x.json()
  );
};

export default getProjectsLists;
