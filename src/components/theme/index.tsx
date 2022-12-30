import { icon } from "@fortawesome/fontawesome-svg-core"
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

const ThemeSwitch = () => {

  const [theme, setTheme] = useState("")
  const router = useRouter()

  const changeTheme = () => {
    let newTheme = theme == "dark" ? "light": "dark"
    console.log(newTheme)
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
    router.reload()
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme("dark")
    }else {
      setTheme("light")
    }
  }, [])

  return (
    <div className="p-1 rounded-full" onClick={changeTheme}>
      <FontAwesomeIcon className="dark:text-white" icon={theme == "dark" ? faMoon : faSun} />
    </div>
  )
}

export default ThemeSwitch