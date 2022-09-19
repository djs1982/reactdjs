
import './App.css';
import BoxForChildren from './components/BoxForChildren';
import NavBar from './components/NavBar';
import Saludo from './components/saludo';

function App() {
  const styles ={
    border: 'solid 3px blue'
  }

  return (
    <>
    <NavBar></NavBar>
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
