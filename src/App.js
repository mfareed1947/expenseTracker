import Child from './Components/Child';
import { TransactionProvider } from './context/transContext';
import './Style.scss'


function App() {
  return (
    <TransactionProvider>
    
      <Child />
    </TransactionProvider>
  );
}

export default App;
