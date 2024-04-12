export interface MyData {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: { customer: string; review: string; score: number }[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: {
      weekEnding: string;
      retailSales: number;
      wholesaleSales: number;
      unitsSold: number;
      retailerMargin: number;
    }
}

export interface ProductPageProps {
  data: MyData;
}

// interface Sales {
//   map(arg0: (sale: any) => string): Iterable<unknown> | null | undefined;
//   weekEnding: String;
//   retailSales: Number; 
//   wholesaleSales: Number;
//   unitsSold: Number;
//   retailerMargin: Number;
// }

// export interface SalesProps {
//   map(arg0: (sale: any) => any): unknown;
//   data: Sales;
// }