const getBlog = async(blog) => {
  // const fetchNow = async (resolve) => {
  //   return await fetch(`https://back-achaweb.vercel.app/blog/get/${blog}.md`).then(async x => await x.json()).catch((err) => fetchNow(resolve)).then(async x => {
  //     if (!x) return await resolve(fetchNow(resolve))
  //     resolve(x)
  //   })
  // }

  // return new Promise((resolve) => {
  //   return fetchNow(resolve)
  // })

  const res = await fetch(`https://back-achaweb.vercel.app/blog/get/${blog}.md`)
  return res.text()

}

export default getBlog