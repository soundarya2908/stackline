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
    sales: [{
      weekEnding: string;
      retailSales: number;
      wholesaleSales: number;
      unitsSold: number;
      retailerMargin: number;
    }]
}

export interface ProductPageProps {
  data: MyData;
}

export interface Sales {
  weekEnding: string;
  retailSales: Number; 
  wholesaleSales: Number;
  unitsSold: Number;
  retailerMargin: Number;
}

export interface SalesProps {
  salesData: Sales[];
}