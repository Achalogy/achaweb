import { faDiscord, faGithub, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/dist/client/router"
import ThemeSwitch from "../components/theme"

export default function MainLayout({ children }: any) {
  const menus = [
    ["Projects", "/#Projects"],
    ["YouTube", "/#YouTube"],
    ["Blog", "/blog"],
    ["Contact", "/#contact"]
  ]

  const router = useRouter()

  return (
    <div className="dark:bg-darkMode-900">
      <header className="sticky top-0 lg:relative z-10 drop-shadow-sm bg-white dark:bg-darkMode-900 dark:text-white py-5 lg:px-16 flex flex-row justify-center lg:justify-between dark:drop-shadow-md">
        <p
          className="text-2xl hidden lg:inline cursor-pointer"
          onClick={() => router.push("/")}
        >
          {"</Achalogy"}
        </p>
        <div className="flex flex-row justify-evenly items-center w-full lg:gap-8 lg:justify-end">
          <ThemeSwitch />
          {menus.map((menu) => (
            // Mejorar Responsive (Agregar menu lateral)
            <a
              key={menu[1]}
              id={menu[1]}
              href={`${menu[1]}`}
              className="font-medium text-sm lg:text-lg no-underline"
            >
              {menu[0]}
            </a>
          ))}
        </div>
      </header>
      {children}
      <footer className="lg:h-half p-8 flex flex-col gap-8 lg:gap-12 items-center justify-center text-md lg:text-2xl text-gray-500">
        <p>
          Check this repo at{" "}
          <a
            className="text-sky-600 tracking-wider"
            onClick={() => window.open("https://github.com/achalogy/achaweb")}
          >
            Github Repo <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
        <div className="flex flex-row justify-between w-1/2 lg:w-1/6">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faGithub}
            onClick={() => window.open("https://github.com/achalogy", "_blank")}
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faYoutube}
            onClick={() =>
              window.open("https://youtube.com/@Achalogy", "_blank")
            }
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faTwitter}
            onClick={() =>
              window.open("https://twitter.com/Achalogy", "_blank")
            }
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faDiscord}
            onClick={() =>
              window.open("https://discord.gg/QjzF4JYFy4", "_blank")
            }
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faLinkedin}
            onClick={() =>
              window.open("https://linkedin.com/in/achalogy", "_blank")
            }
          />
        </div>
      </footer>
    </div>
  );
}