export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  function changeHandle(e){ 
    console.log("===>",e.target.value)
  }
  return (
    <form>
      <input type="text" name="searchbar" placeholder="Search..." value={filterText} onChange={(e)=> onFilterTextChange(e.target.value)}></input>
      <br />
      <label>
        <input type="checkbox" checked={inStockOnly} onChange={(e)=>onInStockOnlyChange(e.target.checked)}/>
        {""}
        Only show product in stock
      </label>
    </form>
  );
}
