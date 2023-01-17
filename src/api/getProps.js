const { default: getBlogList } = require("./blog/getBlogList");
const { default: getMyVideos } = require("./youtube/getMyVideos");

async function getProps() {
  let _videos = await getMyVideos();
  let videos = await _videos.map((v) => {
    return {
      id: v.id,
      name: v.title,
      section: "YouTube",
      onlyOnSearch: true,
      isVideo: true,
    };
  });

  let blogs = await getBlogList()

  if(!videos || !blogs) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      videos: await videos,
      _videos: _videos,
      blogs: await blogs
    },
    revalidate: 900
  };
}

module.exports = getProps