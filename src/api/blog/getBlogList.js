const getBlogList = async () => {
  return await fetch("https://back-achaweb.vercel.app/blog/list", {
    cache: "force-cache",
  }).then((x) => x.json());
};

export default getBlogList;
