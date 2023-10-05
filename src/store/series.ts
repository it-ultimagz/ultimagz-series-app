import { writable } from "svelte/store";
import type { SeriesDataWithTagId } from "../types/interface";

export interface Global {
  name: string;
  age: number;
}

export const seriesStore = writable<SeriesDataWithTagId[]>([]);
