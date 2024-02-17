import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_API_URL,
  YOUTUBE_SEARCH_API_URLs,
} from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResult } from "../utils/redux/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const searchSuggestions = await fetch(YOUTUBE_SEARCH_API_URL + searchQuery);
    // const searchSuggestions = await fetch(
    //   `https://serpapi.com/search.json?engine=google_autocomplete&q=${searchQuery}`
    // );

    const json = await searchSuggestions.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex   justify-between p-2 py-4 shadow-lg w-screen sticky top-0  bg-white">
      <div className="flex w-2/12 ">
        <img
          onClick={toggleMenuHandler}
          className=" h-6 sm:h-8 my-3 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
          alt="menu"
        />
        <Link to="/">
          <img
            className="h-14  sm:h-20"
            src="https://i.pinimg.com/originals/ce/a4/2c/cea42ced22ffdf9e66b2f12910067993.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <div className=" flex  relative flex-col sm:w-9/12  ">
        <div className="flex ">
          <input
            type="text"
            className=" pl-4 ml-2 h-9 sm:w-full border border-gray-400 my-6 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
          />
          <button className=" px-2 my-6 rounded-r-full border bg-gray-100 border-gray-400">
            <FaSearch />
          </button>
        </div>
        {showSuggestions && (
          <div className=" w-[14rem] sm:w-full mt-16 absolute bg-white  ml-2 shadow-lg rounded-lg">
            <ul className="px-4 *:py-1 hover:*:bg-gray-300">
              {suggestions.map((suggestion) => {
                return <li key={suggestion}>{suggestion}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
      <div className=" flex w-1/12  ">
        <img
          className="h-8 my-5  cursor-pointer mx-auto "
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
