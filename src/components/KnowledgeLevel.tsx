export default ({ name, level }: {
  name: string;
  level: 1 | 2 | 3 | 4;
}) => {

  const levels = ["Beginner", "Intermediate", "Advanced", "Mastery"]

  return <div className="flex p-2 px-3 items-center bg-slate-900 rounded  mb-1">
    <p className="flex-1 font-semibold">{name}</p>
    <div className="p-1 w-[40%] md:w-[15%] rounded">
      <p className="text-center">{levels[level - 1]}</p>
      <div className="flex h-1 gap-1">
        <div className={`flex-1 ${level > 0 ? "bg-teal-500" : "bg-slate-300"}`} />
        <div className={`flex-1 ${level > 1 ? "bg-teal-500" : "bg-slate-300"}`} />
        <div className={`flex-1 ${level > 2 ? "bg-teal-500" : "bg-slate-300"}`} />
        <div className={`flex-1 ${level > 3 ? "bg-teal-500" : "bg-slate-300"}`} />
      </div>
    </div>
  </div>
}