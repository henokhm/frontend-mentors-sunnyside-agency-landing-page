import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Testimonials />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
