export interface Deals {
  img?: string;
  productName?: string;
  location?: string;
  date?: string;
  time?: string;
  piece?: number;
  amount?: number;
  status?: 'delivered' | 'pending' | 'rejected';
}
