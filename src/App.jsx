import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import StickyNavBar from "./components/StickyNavBar";
import NewsFeed from "./components/newsfeed/NewsFeed";
// import useInterSectionObserver from "./hooks/useInterSectionObserver";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const updateScrollPosition = () => {
      const currentPosition = document.documentElement.scrollTop;
      if (currentPosition >= 400) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", () => {
      updateScrollPosition();
    });
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);
  return (
    <div>
      {/* <!-- Navbar Starts --> */}
      {!scroll ? <Navbar /> : <StickyNavBar />}
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
