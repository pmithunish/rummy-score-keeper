export type IndexedType<T> = Pick<T, keyof T> & {
  [k: string]: any;
};
