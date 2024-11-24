import PropTypes from 'prop-types';

import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
    );
}


function App() {


  return (
      <>
      <Layout>
          <Home />
      </Layout>
      </>
  )
}

export default App

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};