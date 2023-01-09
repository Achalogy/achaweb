import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/dist/client/router"
import ThemeSwitch from "../components/theme"

export default function MainLayout({ children }: any) {
  const menus = [
    ["Projects", "/#Projects"],
    ["YouTube", "/#YouTube"],
    ["Blog", "/blog"]
  ]

  const router = useRouter()

  return(
    <div className="dark:bg-darkMode-900">
      <header className="sticky top-0 lg:relative z-10 drop-shadow-sm bg-white dark:bg-darkMode-900 dark:text-white py-5 lg:px-16 flex flex-row justify-center lg:justify-between dark:drop-shadow-md">
        <p className="text-2xl hidden lg:inline cursor-pointer" onClick={() => router.push("/")}>{"</Achalogy"}</p>
        <div className="flex flex-row gap-8 items-center">
          <ThemeSwitch />
          {menus.map(menu => 
            <a key={menu[1]} id={menu[1]} href={`${menu[1]}`} className="font-medium text-lg no-underline">{menu[0]}</a>
          )}
        </div>
      </header>
      {children}
      <footer className="h-half flex items-center justify-center text-xl text-white">
        <p>Check this repo at <a className="text-sky-300 tracking-wider" onClick={() => window.open('https://github.com/achalogy/achaweb')}>
            Github Repo <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </footer>
    </div>
  )
}