import "./App.css";
import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import Routes from "./Routes/Routes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Routes />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
