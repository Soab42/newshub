import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import NewsFeed from "./components/newsfeed/NewsFeed";
// import useInterSectionObserver from "./hooks/useInterSectionObserver";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    // calculate current scroll position for navbar and scrollToTop button
    const updateScrollPosition = () => {
      const currentPosition = document.documentElement.scrollTop;
      if (currentPosition >= 200) {
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

  // scroll to top handler function
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* <!-- Navbar Starts --> */}
      <Navbar isScroll={scroll} />
      {/* <!-- Navbar Ends --> */}
      {/* <!-- main --> */}
      <NewsFeed />
      {/* <!-- main ends --> */}
      {/* <!-- Footer --> */}
      <Footer />

      {/* //scroll to top button */}
      <button
        onClick={handleClick}
        className={`fixed bottom-5 right-5 p-2 ring-1 ring-green-400 animate-pulse items-center rounded-full flex justify-center duration-500 ${
          !scroll ? "translate-x-20" : ""
        }`}
      >
        <svg
          className="svg"
          enableBackground="new 0 0 32 32"
          height="32px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
            fill="#515151"
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
