import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Error from './routes/Error';
import Hotels from './routes/Hotels';
import Booking from './routes/Booking';
import Dev from './routes/dev';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hotels' element={<Hotels/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/dev' element={<Dev/>}/>
          <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
