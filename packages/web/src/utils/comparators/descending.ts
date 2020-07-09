import * as Utils from "src/utils";
import * as _ from "lodash";

export interface DescendingProps<T> {
  firstElement: T;
  secondElement: T;
  sortBy: keyof T;
}

export function descending<T>({
  firstElement,
  secondElement,
  sortBy,
}: DescendingProps<T>): number {
  if (
    ((_.get(secondElement, sortBy) as unknown) as Utils.Types.IndexedType<T>) <
    ((_.get(firstElement, sortBy) as unknown) as Utils.Types.IndexedType<T>)
  ) {
    return -1;
  }
  if (
    ((_.get(secondElement, sortBy) as unknown) as Utils.Types.IndexedType<T>) >
    ((_.get(firstElement, sortBy) as unknown) as Utils.Types.IndexedType<T>)
  ) {
    return 1;
  }
  return 0;
}
