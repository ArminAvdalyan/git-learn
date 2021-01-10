// import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import Footer from './Container/Footer/Footer';
import Header from './Container/Header/Header';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
