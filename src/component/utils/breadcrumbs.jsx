import { useMatches } from "react-router-dom";

function Breadcrumbs() {
    let matches = useMatches();
    let crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => match.handle.crumb(match.data));

    return (
        <ol className="flex text-white">
            {crumbs.map((crumb, index) => {
                if(index < crumbs.length - 1){
                    return (
                            <li key={index}>
                                <span className="hover:text-gray-400">{crumb}</span>
                                <span className="px-2">{`>`}</span>
                            </li>
                    )
                }else{
                    return (
                        <div key={index}>
                            <li className="hover:text-gray-400" >{crumb}</li>
                        </div>
                    )
                }
            })}
        </ol>
    );
}

export default Breadcrumbs