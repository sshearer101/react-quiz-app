import './App.css';
import { data } from './data'
import QuestionContainer from './components/QuestionContainer';

function App() {

  return (
    <div className="App">
      <QuestionContainer data={data}/>
    </div>
  );
}

export default App;
