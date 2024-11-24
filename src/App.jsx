import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';

import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

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
                  <Route path="/" element={
                      <div>Home</div>
                      // <Home />
                  } />
              </Route>
          </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
