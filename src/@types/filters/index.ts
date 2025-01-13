export type Filters<T extends Record<string, any>, K extends keyof T = keyof T> = {
  [P in keyof T]?: T[P] | T[P][] | undefined;
} & {
  _start?: number;
  _end?: number;
  _page?: number;
  _per_page?: number;
  _sort?:
    | K
    | `${K extends string ? K : never},${K extends string ? K : never}`
    | `${K extends string ? K : never},${K extends string ? K : never},${K extends string ? K : never}`
    | `-${K extends string ? K : never}`
    | `-${K extends string ? K : never},-${K extends string ? K : never}`
    | `-${K extends string ? K : never},-${K extends string ? K : never},-${K extends string ? K : never}`;
};
