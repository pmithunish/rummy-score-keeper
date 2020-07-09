import * as Utils from "src/utils";

export function ascending<T>(
  props: Utils.Comparators.DescendingProps<T>
): number {
  return -Utils.Comparators.descending(props);
}
