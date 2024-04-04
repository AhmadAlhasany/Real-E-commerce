import Home from './Pages/Home/Home'
import Layout from './Components/Layout';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import NotFound from './Components/NotFound';

import { RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from 'react-router-dom';
import ProductDets from './Pages/Shop/ProductDets';

const router = createBrowserRouter(createRoutesFromElements(
  <>   
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/shop/:id' element={<ProductDets/>}/>
    </Route>
    <Route path="*" element={<NotFound/>} />
  </>
))

function App() {

  return (
        <RouterProvider router={router}/>
  );
}

export default App;
