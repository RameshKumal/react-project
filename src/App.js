import logo from './logo.svg';
import './App.css';
import Game from './component/tictac/game';
import FilterProductTable from './component/product/filterproducttable';

function App() {
  return (
    <div >
        <Game />
        <hr></hr>
        <FilterProductTable />
    </div>
  );
}

export default App;
