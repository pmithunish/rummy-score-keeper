export interface Product {
  id: string;
  slabId: string;
  name: string;
  type: string; // Ex: phone, headphones, charger etc
  color?: string;
  companyName: string;
  modelNumber: string;
  dealerPrice: number;
  sellingPrice: number;
  purchaseDate: number;
  sellingDate: number;
}
