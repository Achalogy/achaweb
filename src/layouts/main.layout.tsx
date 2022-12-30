import ThemeSwitch from "../components/theme"

export default function MainLayout({ children }: any) {
  const menus = [
    ["Projects", "/#Projects"],
    ["YouTube", "/#YouTube"],
    ["Blog", "/blog"]
  ]

  return(
    <div className="dark:bg-darkMode-900">
      <header className="sticky top-0 lg:relative z-10 drop-shadow-sm bg-white dark:bg-darkMode-900 dark:text-white py-5 lg:px-16 flex flex-row justify-center lg:justify-between dark:drop-shadow-md">
        <a className="text-2xl hidden lg:inline" href="/#Achalogy">{"</Achalogy"}</a>
        <div className="flex flex-row gap-8 items-center">
          <ThemeSwitch />
          {menus.map(menu => 
            <a key={menu[1]} id={menu[1]} href={`${menu[1]}`} className="font-medium text-lg">{menu[0]}</a>
          )}
        </div>
      </header>
      {children}
      <footer className="h-half"></footer>
    </div>
  )
}