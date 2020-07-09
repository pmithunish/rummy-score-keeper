export interface Slab {
  id: string;
  quantity: number;
  discountPerPiece: number;
  margin: number;
  date: number;
  product: {
    id: string;
    name: string;
    type: string;
    companyName: string;
    modelNumber: string;
    color?: string;
  };
}
