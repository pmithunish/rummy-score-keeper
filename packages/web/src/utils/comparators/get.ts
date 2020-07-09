import * as Utils from "src/utils";

export interface GetProps<K> {
  sortOrder: "ASC" | "DESC";
  sortBy: K;
}

export type GetReturn<T> = (
  props: Omit<Utils.Comparators.DescendingProps<T>, "sortBy">
) => number;

export function get<T, K extends keyof T>({
  sortOrder,
  sortBy,
}: GetProps<K>): GetReturn<T> {
  return sortOrder === "DESC"
    ? ({ firstElement, secondElement }) =>
        Utils.Comparators.descending({ firstElement, secondElement, sortBy })
    : ({ firstElement, secondElement }) =>
        Utils.Comparators.ascending({ firstElement, secondElement, sortBy });
}
