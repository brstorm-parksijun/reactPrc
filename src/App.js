import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/Createword';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          <Route path='*' element={<EmptyPage />} />
          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
