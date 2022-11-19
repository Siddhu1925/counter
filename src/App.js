import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className='App'>
      <Counter/>
    </div>
  );
}

export default App



/* 
React Components re-render whenever there is change in either props and state
Props - Data sent from parent component down to child component (One-Way Data-Binding)
 State-Data wwhich is private to a component

 Note: Earlier,states could only be created in class based components
*/