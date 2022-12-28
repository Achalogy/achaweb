const getMyVideos = async() => {
  const x = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&channelId=UCdHxbtl_C3vMzpHCnNWf66Q&part=snippet,id&order=date&maxResults=100`);
  let res = await x.json()

  return res.items.filter(x => x.id.kind == "youtube#video").map(x => {
    return {
      id: x.id.videoId,
      title: x.snippet.title
    }
  })
}

export default getMyVideos