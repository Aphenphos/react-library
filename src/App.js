import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/books">
            <BookList />
          </Route>
          <Route path="/books/:id">
            <BookDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
