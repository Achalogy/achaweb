const getBlogInfo = async (blog) => {
  return await fetch(`https://back-achaweb.vercel.app/blog/info/${blog}.md`, {
    cache: "force-cache",
  }).then((x) => x.json());
}

export default getBlogInfo