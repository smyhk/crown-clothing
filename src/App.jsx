import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import NavBar from './routes/navbar/navbar.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
