import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Error from './routes/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
