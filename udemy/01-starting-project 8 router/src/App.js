import { Route } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
      <Route path="/welcome" exact>
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      </main>
     </div>
  );
}

export default App;
