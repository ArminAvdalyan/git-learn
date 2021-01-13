// import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
