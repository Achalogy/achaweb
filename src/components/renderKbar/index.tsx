import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { KBarResults } from 'kbar/lib/KBarResults'
import { useMatches } from 'kbar/lib/useMatches'

const RenderResults = ({ searchText }: { searchText: any }) => {
  let { results } = useMatches();

  results = results.filter((x: any) => {
    if(x.onlyOnSearch) {
      return searchText != ""
    }
    return true
  })

  return (

    <KBarResults
      items={results}
      onRender={({ item, active }: {item: any, active: any}) => {

        return typeof item === "string" ? (
          <div className='p-2 py-0 text-sm text-zinc-700'>{item}</div>
        ) : (
          <div
            className={`h-12 py-0 px-5 flex flex-row justify-between ${active ? 'bg-zinc-100' : 'bg-transparent'} box-border items-center`}
          >
            <p className='font-medium' style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "90%"
            }}>{item.name}</p>
            {
              item.shortcut && <span className='bg-zinc-200 h-8 w-6 flex justify-center items-center rounded-sm font-semibold'>{item.shortcut}</span>
            }
            {
              item.isVideo && <FontAwesomeIcon icon={faYoutube} color="red" />
            }
          </div>
        )
      }
      }
    />
  );
}

export default RenderResults