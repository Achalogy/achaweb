const getProject = async (id) => {
  return await fetch(`https://back-achaweb.vercel.app/projects?search=${id}`).then(
    (x) => x.json()
  );
};

export default getProject;
