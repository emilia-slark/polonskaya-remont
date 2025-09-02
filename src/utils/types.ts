import { ROUTES } from "@constants";

export type ValueOf<T> = T[keyof T];

export type RouteValue = ValueOf<typeof ROUTES>;

export interface CarouselItem {
  image: string,
  description: string
}