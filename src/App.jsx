import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';

import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

const Layout = () => {
    return (
        <>
        <Navbar />
            <main style={{
                minHeight:'100vh',
            }}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}


function App() {

  return (
      <>
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />} >
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
