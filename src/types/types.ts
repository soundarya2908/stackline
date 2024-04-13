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

export enum ActionTypes {
  LOAD = 'LOAD',
  LOAD_SUCCESS = 'LOAD_SUCCESS',
  LOAD_FAILURE = 'LOAD_FAILURE',
}

interface LoadAction {
  type: ActionTypes.LOAD;
}

interface LoadSuccessAction {
  type: ActionTypes.LOAD_SUCCESS;
  usersData: MyData[]; 
  error: string;
}

interface LoadFailureAction {
  type: ActionTypes.LOAD_FAILURE;
  error: string;
}

export type UserActionTypes = LoadAction | LoadSuccessAction | LoadFailureAction;

