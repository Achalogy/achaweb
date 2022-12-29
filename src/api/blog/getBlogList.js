const getBlogList = async () => {
  const fetchNow = async (resolve) => {
    return await fetch('https://back-achaweb.vercel.app/blog/list').then(async x => await x.json()).catch((err) => fetchNow(resolve)).then(async x => {
      if (!x) return await resolve(fetchNow(resolve))
      resolve(x)
    })
  }

  return new Promise((resolve) => fetchNow(resolve))
}

export default getBlogList