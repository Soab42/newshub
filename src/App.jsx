import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import NewsFeed from "./components/newsfeed/NewsFeed";

function App() {
  return (
    <div>
      {/* <!-- Navbar Starts --> */}
      <Navbar />
      {/* <!-- Navbar Ends --> */}
      {/* <!-- main --> */}
      <NewsFeed />
      {/* <!-- main ends --> */}
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default App;
