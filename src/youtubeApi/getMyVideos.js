const getMyVideos = async() => {
  const x = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&channelId=UCdHxbtl_C3vMzpHCnNWf66Q&part=snippet,id&order=date&maxResults=100`);
  let res = await x.json()

  console.log(res)

  return res.items.filter(x => x.id.kind == "youtube#video").map(x => {
    return {
      id: x.id.videoId,
      title: x.snippet.title,
      video: `https://youtu.be/${x.id.videoId}`
    }
  })
}

export default getMyVideos