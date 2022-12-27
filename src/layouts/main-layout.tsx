export default function MainLayout({ children }: any) {
  const menus = [
    ["Projects", "/#Projects"],
    ["YouTube", "/#YouTube"],
    ["Blog", "/blog"]
  ]

  return(
    <>
      <header className="drop-shadow-sm bg-white py-5 px-16 flex flex-row justify-between">
        <a className="text-2xl" href="/#Achalogy">{"</Achalogy"}</a>
        <div className="flex flex-row gap-8 items-center">
          {menus.map(menu => 
            <a id={menu[1]} href={`${menu[1]}`} className="font-medium text-lg">{menu[0]}</a>
          )}
        </div>
      </header>
      {children}
      <footer className="h-half"></footer>
    </>
  )
}