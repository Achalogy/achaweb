const getProject = async (id) => {
  try {
    return await fetch(`https://back-achaweb.vercel.app/projects?search=${id}`).then(
      (x) => x.json()
    );
  } catch (e) {
    console.log(e)
    return {}
  }
};

export default getProject;
