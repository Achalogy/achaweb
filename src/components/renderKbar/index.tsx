import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { KBarResults } from 'kbar/lib/KBarResults';
import { useMatches } from 'kbar/lib/useMatches';

const RenderResults = ({ searchText }: { searchText: any }) => {
  let { results } = useMatches();

  results = results.filter((x: any) => {
    if(x.onlyOnSearch) {
      return searchText != ""
    }
    return true
  })

  results = results.filter((x: any) => {
    if(typeof x === "string") {
      return results.find((a: any) => a.section === x)
    }
    return true
  })

  return (

    <KBarResults
      items={results}
      onRender={({ item, active }: {item: any, active: any}) => {

        return typeof item === "string" ? (
          <div className='p-2 py-0 text-sm text-zinc-700 dark:text-zinc-400'>{item}</div>
        ) : (
          <div
            className={`h-12 py-0 px-5 flex flex-row justify-between ${active ? 'bg-zinc-100 dark:bg-darkMode-800' : 'bg-transparent'} box-border items-center`}
          >
            <p className='font-medium dark:text-white' style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "90%"
            }}>{item.name}</p>
            {
              item.shortcut && <span className='bg-zinc-200 dark:bg-darkMode-600 dark:text-white h-8 w-6 flex justify-center items-center rounded-md font-semibold'>{item.shortcut}</span>
            }
            {
              item.isVideo && <FontAwesomeIcon icon={faYoutube} color="red" />
            }
            {
              item.isBlog && <FontAwesomeIcon icon={faMessage} style={{
                marginRight: "0.1em",
                fontSize: ".9em"
              }} />
            }
          </div>
        )
      }
      }
    />
  );
}

export default RenderResults