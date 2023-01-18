const tagColors: any = {
  javascript: `text-yellow-600 bg-yellow-50 border-yellow-200`,
  react: `text-sky-600 bg-sky-50 border-sky-200`,
  css: `text-cyan-600 bg-cyan-50 border-cyan-200`,
  html: `text-orange-600 bg-orange-50 border-orange-200`,
  node: `text-green-600 bg-green-50 border-green-200`,
  typescript: `text-blue-600 bg-blue-50 border-blue-200`,
  express: `text-emerald-600 bg-emerald-50 border-emerald-200`,
  next: `text-stone-600 bg-stone-50 border-stone-200`,
  sass: `text-pink-600 bg-pink-50 border-pink-200`,
  torrent: `text-green-600 bg-green-50 border-green-200`,
};

export default function Tag({ str }: { str: string }) {
  const color =
    tagColors[str.toLowerCase()] ??
    `text-gray-600 bg-gray-50 border-gray-200`;

  return (
    <p className={`px-4 p-1 rounded-full border text-xs ${color} dark:bg-transparent dark:border-opacity-20`}>
      {str}
    </p>
  );
}
