import * as Utils from "src/utils";

export interface StableSortProps<T> {
  array: T[];
  comparator: Utils.Comparators.GetReturn<T>;
}

export function stableSort<T>({ array, comparator }: StableSortProps<T>): T[] {
  const stabilizedThis = array.map(
    (element, index) => [element, index] as [T, number]
  );
  stabilizedThis.sort((first, second) => {
    const order = comparator({
      firstElement: first[0],
      secondElement: second[0],
    });
    if (order !== 0) {
      return order;
    }
    return first[1] - second[1];
  });
  return stabilizedThis.map((element) => element[0]);
}
