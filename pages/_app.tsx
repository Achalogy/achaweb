import '../styles/globals.css'
import { KBarProvider } from 'kbar'
import { KBarPortal } from 'kbar/lib/KBarPortal'
import { KBarPositioner } from 'kbar/lib/KBarPositioner'
import { KBarAnimator } from 'kbar/lib/KBarAnimator'
import { KBarSearch } from 'kbar/lib/KBarSearch'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import getMyVideos from '../src/api/youtube/getMyVideos'
import RenderResults from '../src/components/renderKbar'
import getBlogList from '../src/api/blog/getBlogList'
import Blog from '../src/interfaces/Blog'
export { reportWebVitals } from 'next-axiom';
import Script from 'next/script'

export default function App({ Component, pageProps, videos, _videos, blogs }: any) {
  const [searchText, setSearchText] = useState("")
  const router = useRouter()
  let actions: any   = [
      {
        id: "blog",
        name: "Blog",
        shortcut: ["b"],
        perform: () => router.push("/blog"),
        section: 'Go to'
      },
      {
        id: "home",
        name: "Home",
        shortcut: ["h"],
        perform: () => router.push("/"),
        section: 'Go to'
      },
      {
        id: "projects",
        name: "My Top Projects",
        shortcut: ["p"],
        perform: () =>  router.push("/#Projects"),
        section: 'Projects'
      },
      {
        id: "adventjsTest",
        name: "Advent Js for Newbies",
        perform: () => window.open("https://github.com/achalogy/advent-js-2022", "_blank"),
        section: 'Projects',
        onlyOnSearch: true
      },
      {
        id: "youtubevids",
        name: "YouTube",
        perform: () => window.open("https://youtube.com/@Achalogy", "_blank"),
        shortcut: ["y"],
        section: "Go to"
      }
    ]

  actions = actions.concat(videos.map((v: any) => {
    v.perform = () => window.open(`https://youtu.be/${v.id}`, '_bl')
    return v
  }))

  actions = actions.concat(blogs.map((blog: Blog) => {
    return({
      id: blog.id,
      name: blog.title,
      perform: () => router.push(`/blog/${(blog.id).split(".")[0]}`),
      section: "Blog",
      onlyOnSearch: true,
      isBlog: true
    })
  }))

  useEffect(() => {
    localStorage.setItem("@videos", JSON.stringify(_videos))
    localStorage.setItem("@blogs", JSON.stringify(blogs))
    let theme = localStorage.getItem("theme")
    if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = "#1F2232"
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = "#fff"
    }
  }, [])

  return <>
  
    <Script src="/theme.js" strategy="beforeInteractive" />
    <KBarProvider actions={actions} options={{
      disableScrollbarManagement: true,
    }}>
      
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator className='w-1/3 rounded-lg overflow-hidden drop-shadow-2xl bg-white dark:bg-darkMode-900'>
            <KBarSearch onFocus={() => setSearchText('')}  onChange={(test) => setSearchText(test.target.value)} value={searchText} className='border-none outline-none p-4 bg-white dark:bg-darkMode-800 dark:text-white text-black w-full text-xl'/>
            <RenderResults searchText={searchText} />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"></link>
      <Component {...pageProps} videos={_videos} blogs={blogs} />
    </KBarProvider>
  
  </>
}

App.getInitialProps = async () => {
  let _videos = (await getMyVideos())
  let videos = await _videos.map((v: any) => {
      return {
        id: v.id,
        name: v.title,
        section: "YouTube",
        onlyOnSearch: true,
        isVideo: true
      }
    })

  return {videos: await videos, _videos: _videos, blogs: await getBlogList()}
}