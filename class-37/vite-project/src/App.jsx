

import './App.css'
import Cart from './component/Cart';
import Home from './component/Home';
import Nav_bar  from './component/Nav_bar';
 
import {BrowserRouter,Routes, Route} from 'react-router-dom';

import store from './store/store';

import {Provider} from "react-redux"
function App() {

  return (
    <>
        <Provider store={store}>
        <BrowserRouter>
        <Nav_bar/>
           <Routes>
              <Route path = "/" element={  <Home/>} />
              <Route path = "/cart" element={ <Cart/>}/>
           </Routes>
          </BrowserRouter>
          </Provider>
    </>
  )
}

export default App
