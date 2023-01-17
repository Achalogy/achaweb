const getBlog = async (blog) => {
  return await fetch(`https://back-achaweb.vercel.app/blog/get/${blog}.md`, {
    cache: "force-cache",
  }).then((x) => x.text());
};

export default getBlog;
