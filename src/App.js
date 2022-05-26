import { useEffect } from 'react';

import { Routes , Route } from 'react-router-dom';

import './assets/styles/style.scss';
import Header from './core-ui/Header/Header';
import Footer from './core-ui/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Shop from './pages/Shop/Shop';
import Wishlist from './pages/Wishlist/Wishlist';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Cart/Cart';
import ProductDetails from './components/Shop/SingleProduct/ProductDetails';
import SingleProduct from './components/Shop/SingleProduct/SingleProduct';
import Auth from './pages/Auth/Auth';
import ScrollToTop from './utilities/SrollToTop';
import MyAccount from './pages/MyAccount/MyAccount';

import { useDispatch} from 'react-redux';
import { onAuthStateChangedListener , createUserDocument} from './utilities/firebase/Firebase';
import { setCurrentUser } from './redux/user/userAction';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsbscribe = onAuthStateChangedListener((user) => {
      if(user) {
          createUserDocument(user);
      }
      dispatch(setCurrentUser(user));
    })  
  
    return unsbscribe;
  
  }, []);







  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product' element={<SingleProduct />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/my-account' element={<MyAccount />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
