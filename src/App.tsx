import { useState } from "react";

import "./App.css";
import Box from "./components/box";
import Nav from "./components/nav";
import SearchBar from "./components/searchBar";
import Logo from "./components/logo";
import useMovies from "./useMovies";
import MovieItem from "./components/MovieItem";
function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const MoviesHook = useMovies(query);

  return (
    <>
      {/* nav */}
      <div className="body bg-gray-800 px-[32px] py-[20px] min-h-[100vh]  font-mono">
        <Nav>
          <div className="w-[100%] h-[100%] flex  gap-[30px] items-center justify-between">
            <Logo />
            <SearchBar query={query} setQuery={setQuery} />
            <p className="text-white text-[18px] font-medium">
              {/* we found {movies ? movies.length : "0"} movie */}
            </p>
          </div>
        </Nav>
        {/* boxes */}
        <div className="  text-white flex items-center justify-center gap-[30px] ">
          <Box>
            {MoviesHook.state != "done" && MoviesHook.state}
            {MoviesHook.state == "done" && (
              <>
                {MoviesHook.movies.map((movie) => {
                  return <MovieItem movie={movie} />;
                })}
              </>
            )}
          </Box>
          <Box>
            <p>this is test1</p>
          </Box>
        </div>
        <div className="">
          <button>prev</button>
          <button>next</button>
        </div>
      </div>
    </>
  );
}

export default App;
