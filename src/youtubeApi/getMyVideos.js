const getMyVideos = async() => {
  const x = await fetch(`https://back-achaweb.vercel.app/youtube-videos`);
  let res = await x.json()

  return res
}

export default getMyVideos