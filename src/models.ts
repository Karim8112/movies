export interface IMovie {
  Poster?: string;
  Title?: string;
  Type?: string;
  Year?: Date;
  imdbID?: number;
}

export interface dataModel {
  Response: "True" | "False";
  totalResults?: string;
  Search?: IMovie[];
  Error?: string;
}
