
import './App.css';
import NavBar from './components/NavBar';
import Clicker from './components/Clicker';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const styles ={
    border: 'solid 3px blue'
  }

  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path={'/'} element={<ItemListContainer/>}/>
      <Route path={'/category'} element={<ItemListContainer/>}/>
      <Route path={'/category/item/1'} element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    
    
    

    {/* //<div>
    //   <h1>
    //     "Hola Mundo"
    //   </h1>
    //   <BoxForChildren>
    //     <p> Donde va???</p>
    //   </BoxForChildren>
    //   <h2 style={styles} className='back'>
    //     " Como estan?"
    //   </h2>

    //   <Saludo name='Damian' age={40}></Saludo>
    //   <Saludo name='Pablo' age={41}></Saludo>
    //   <Saludo name='Maria' age={23}></Saludo>
    // </div> */}
    </>
  );
}

export default App;
