const getMyVideos = async() => {
  const fetchNow = async (resolve) => {
    return await fetch('https://back-achaweb.vercel.app/youtube-videos').then(async x => await x.json()).catch((err) => fetchNow()).then(async x => {
      if (!x) return await resolve(fetchNow())
      resolve(x)
    })
  }

  return new Promise((resolve) => {
    return fetchNow(resolve)
  })
}

export default getMyVideos