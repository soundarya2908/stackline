import { SalesProps } from "../store/types";
import SalesChart from "./SalesChart";

const Table: React.FC<SalesProps> = ( {salesData}) => {

    // const columns = Object.keys(salesData[0])
    const columns = ["WEEK ENDING", "RETAIL SALES", "WHOLESALE SALES", "UNITS SOLD"]

    return (
        <table>

        </table>
    )

}

export default Table;