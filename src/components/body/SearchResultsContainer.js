import { Link, useSearchParams } from "react-router-dom"
import { YOUTUBE_SEARCH_VIDEO_API } from "../../utils/constants";
import { useEffect, useState } from "react";

const SearchResultsContainer = () => {

    // state variables
    const [searchResults, setSearchResults] = useState([]);

    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get('search_query');

    useEffect(() => {
        getSearchQueryLists();
    }, [searchQuery])

    const getSearchQueryLists = async () => {
        const getSearchMovies = await fetch(YOUTUBE_SEARCH_VIDEO_API + searchQuery);
        const searchMoviesList = await getSearchMovies.json();
        setSearchResults(searchMoviesList?.items);
        console.log(searchResults?.items);
    }

    return (
        <div className="flex flex-wrap mt-5">
            {searchResults.map((video) => (
                <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId} >
                    <div className="p-2 w-72 shadow-lg">
                        <img className="rounded-lg" src={video?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
                        <ul>
                            <li className="font-bold">{video?.snippet?.title}</li>
                            <li className="text-gray-800 font-medium">{video?.snippet?.channelTitle}</li>
                            <li className="font-bold">{246 + " Views"}</li>
                        </ul>
                    </div>

                </Link>
            ))}
        </div>
    )
}

export default SearchResultsContainer