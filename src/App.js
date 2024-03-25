import './App.css';
import ListContextWrapper from './components/ListNoteContext/ListContextWrapper';

function App() {
  return (<div className=' position-relative vh-100 bg-dark bg-gradient'>
    <div className="w-75 position-absolute start-50 translate-middle-x m-4  bg-secondary bg-gradient">
      <h1 className='text-success text-center m-4 p-3 bg-transparent'> REACT TODO APP</h1>
      <ListContextWrapper />
    </div>
  </div>
  );
}

export default App;
