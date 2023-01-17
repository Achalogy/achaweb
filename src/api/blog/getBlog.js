const getBlog = async (blog) => {
  return awaitfetch(`https://back-achaweb.vercel.app/blog/get/${blog}.md`, {
    cache: "force-cache",
  }).then((x) => x.text());
};

export default getBlog;
