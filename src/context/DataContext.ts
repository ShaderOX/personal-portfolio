import { createContext } from "react";
import data from "../data.json";

const DataContext = createContext(data);

export default DataContext;
