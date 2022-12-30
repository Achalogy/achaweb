import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitch from "../components/theme";

export default function BlogLayout({children}: { children: any }) {
  return <>
    <div className="flex flex-col min-h-screen dark:bg-darkMode-900">
  
      <header className="p-4 flex justify-center gap-10 items-center">
        {/* Solo Computador */}
        <div className="flex flex-row py-2 px-3 rounded-xl border-zinc-200 dark:border-darkMode-400 border gap-1 max-lg:hidden">
          <p className="text-zinc-400 mr-24">Search...</p>
          <p className="text-xs px-2 py-1 bg-zinc-200 dark:bg-darkMode-700 dark:text-white rounded-md">cmd</p>
          <p className="text-xs px-3 py-1 bg-zinc-200 dark:bg-darkMode-700 dark:text-white rounded-md">k</p>
        </div>
        <div className="flex flex-row gap-6 text-2xl items-center">
          <ThemeSwitch />
          <FontAwesomeIcon className="cursor-pointer dark:text-white" icon={faGithub} onClick={() => window.open('https://github.com/achalogy', '_blank')} />
          <FontAwesomeIcon className="cursor-pointer" icon={faYoutube} color="red" onClick={() => window.open('https://youtube.com/@Achalogy', '_blank')} />
        </div>
      </header>
      {children}
      <footer>

      </footer>

    </div>
  </>
}