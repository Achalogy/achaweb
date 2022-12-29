import '../styles/globals.css'
import { KBarProvider } from 'kbar'
import { KBarPortal } from 'kbar/lib/KBarPortal'
import { KBarPositioner } from 'kbar/lib/KBarPositioner'
import { KBarAnimator } from 'kbar/lib/KBarAnimator'
import { KBarSearch } from 'kbar/lib/KBarSearch'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import getMyVideos from '../src/youtubeApi/getMyVideos'
import RenderResults from '../src/components/renderKbar'

export default function App({ Component, pageProps, videos, _videos }: any) {
  const [searchText, setSearchText] = useState("")
  const router = useRouter()
  let actions: any   = [
      {
        id: "blog",
        name: "Blog",
        shortcut: ["b"],
        perform: () => router.push("blog"),
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
        name: "Recommended YouTube Videos",
        perform: () => router.push("/#YouTube"),
        shortcut: ["y"],
        section: "YouTube"
      }
    ]

  actions = actions.concat(videos.map((v: any) => {
    v.perform = () => window.open(`https://youtu.be/${v.id}`, '_bl')
    return v
  }))

  useEffect(() => {
    localStorage.setItem("@videos", JSON.stringify(_videos))
  }, [])

  return <KBarProvider actions={actions}>
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator className='w-1/3 rounded-lg overflow-hidden drop-shadow-2xl bg-white'>
          <KBarSearch onChange={(test) => setSearchText(test.target.value)} value={searchText} className='border-none outline-none p-4 bg-white text-black w-full text-xl'/>
          <RenderResults searchText={searchText} />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
    <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"></link>
    <Component {...pageProps} />
  </KBarProvider>
}

App.getInitialProps = async () => {
  let _videos = (await getMyVideos())
  let videos = _videos.map((v: any) => {
      return {
        id: v.id,
        name: v.title,
        section: "YouTube",
        onlyOnSearch: true,
        isVideo: true
      }
    })

  return {videos: videos, _videos: _videos}
}