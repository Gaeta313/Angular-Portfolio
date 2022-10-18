import { Featuring } from "./featuring";

export interface Progetto {
  id: number;
  title: string;
  featuring?: Featuring[];
  linguage: string;
  summary: string;
  description: string;
  bg: string;
  link: string;
  images?: string[];
  repository: string;
  video?: string;
}
