import ProductTable from "./producttable";
import SearchBar from "./searchbar";
import { useState } from "react";

let PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: false, name: "Peas" }
  ];

export default function FilterProductTable(){
    const[filterText, setFilterText] = useState('');
    const[inStockOnly, setInStockOnly] = useState(false);
    
    return(
        <>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} 
            onFilterTextChange={setFilterText} 
            onInStockOnlyChange={setInStockOnly}
            /> 
            <br />
            <ProductTable  products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly} />
        </>
    )
}