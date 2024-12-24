export type state = "loading" | "done" | "error" | string;

export const appName = "MovieTraining";

export type IError<DataModel> = {
  [Key in keyof DataModel]: string;
} & { generalMessage?: string };
