export interface Transaction {
  id: number;
  date: Date;
  fromIBAN: string;
  toIBAN: string;
  accountId: number;
  title: string;
  description: string;
  amount: number;
  category: string;
}
