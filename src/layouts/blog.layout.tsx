import { faDiscord, faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import ThemeSwitch from "../components/theme";

export default function BlogLayout({children, isBlog}: { children: any, isBlog: boolean }) {

  const router = useRouter()

  return (
    <>
      <div className="flex flex-col min-h-screen dark:bg-darkMode-900 items-center">
        <header
          className={`py-4 px-8 lg:px-4 flex gap-20 items-center ${
            isBlog
              ? "justify-between lg:justify-around w-full lg:w-7/12"
              : "justify-center"
          }`}
        >
          {isBlog && (
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="dark:text-white cursor-pointer"
              onClick={() => router.push("/blog")}
            />
          )}

          {!isBlog && (
            <div
              className="flex flex-row justify-center items-center gap-2"
              onClick={() => router.push("/")}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="dark:text-white cursor-pointer"
              />
              <h1 className="dark:text-white cursor-pointer font-semibold text-lg">
                Home
              </h1>
            </div>
          )}

          {/* Solo Computador */}
          <div className="flex flex-row py-2 px-3 rounded-xl border-zinc-200 dark:border-darkMode-400 border gap-1 max-lg:hidden">
            <p className="text-zinc-400 mr-24">Search...</p>
            <p className="text-xs px-2 py-1 bg-zinc-200 dark:bg-darkMode-700 dark:text-white rounded-md">
              cmd
            </p>
            <p className="text-xs px-3 py-1 bg-zinc-200 dark:bg-darkMode-700 dark:text-white rounded-md">
              k
            </p>
          </div>
          <div className="flex flex-row gap-6 text-2xl items-center">
            <ThemeSwitch />
            <FontAwesomeIcon
              className="cursor-pointer dark:text-white"
              icon={faGithub}
              onClick={() =>
                window.open("https://github.com/achalogy", "_blank")
              }
            />
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faYoutube}
              color="red"
              onClick={() =>
                window.open("https://youtube.com/@Achalogy", "_blank")
              }
            />
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faTwitter}
              color="#00ACEE"
              onClick={() => window.open("https://twitter.com/Achalogy", '_blank')}
            />
            <FontAwesomeIcon
              className="cursor-pointer dark:text-white"
              icon={faDiscord}
              onClick={() => window.open("https://discord.gg/QjzF4JYFy4", '_blank')}
            />
          </div>
        </header>
        {children}
        <footer></footer>
      </div>
    </>
  );
}