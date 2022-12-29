export default function MainLayout({ children }: any) {
  const menus = [
    ["Projects", "/#Projects"],
    ["YouTube", "/#YouTube"],
    ["Blog", "/blog"]
  ]

  return(
    <>
      <header className="sticky top-0 lg:relative z-10 drop-shadow-sm bg-white py-5 lg:px-16 flex flex-row justify-center lg:justify-between">
        <a className="text-2xl hidden lg:inline" href="/#Achalogy">{"</Achalogy"}</a>
        <div className="flex flex-row gap-8 items-center">
          {menus.map(menu => 
            <a key={menu[1]} id={menu[1]} href={`${menu[1]}`} className="font-medium text-lg">{menu[0]}</a>
          )}
        </div>
      </header>
      {children}
      <footer className="h-half"></footer>
    </>
  )
}