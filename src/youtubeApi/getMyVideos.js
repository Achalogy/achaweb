const getMyVideos = async() => {
  const fetchNow = async () => {
    return await fetch('https://back-achaweb.vercel.app/youtube-videos').then(async x => await x.json()).catch((err) => fetchNow()).then(async x => {
      if(!x) return await fetchNow()
      return x
    })
  }

  return fetchNow()
}

export default getMyVideos