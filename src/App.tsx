import './App.css';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './container/CardList';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

import MovieDetail from './container/MovieDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <SearchBar />
        <Routes>
          <Route path="/" Component={CardList} />
          <Route path="/details/:id" Component={MovieDetail} />
        </Routes>
      </Router>

      {/* <CardList /> */}
    </Provider>
  );
}

export default App;
