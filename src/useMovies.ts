import * as Model from "./models";
import { useEffect, useState } from "react";
import { URL } from "./api";
const useMovies = function (title: string) {
  const [movies, setMovies] = useState<Model.IMovie[]>([]);
  const [state, setState] = useState<"loading" | "done" | string>("");

  const searchForMovie = async function () {
    if (title.length > 3) {
      try {
        setState("loading");
        const res = await fetch(URL + title);
        const data: Model.dataModel = await res.json();

        if (res.ok) {
          setMovies(data.Search!);
          setState("done");
        }
        if (!res.ok) {
          throw new Error(data.Error);
        }
        if (data.Response == "False") {
          throw new Error(data.Error);
        }
      } catch (err) {
        setState(err.message);
      }
    }
  };

  useEffect(() => {
    searchForMovie();
  }, [title]);

  return {
    searchForMovie,
    state,
    setState,
    movies,
    setMovies
  };
};
export default useMovies;
