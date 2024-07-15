import { FC, ReactElement, useEffect, useState } from "react";

// Components
import Header from "./Header";
import SideBar from "./Sidebar";
import Footer from "./Footer";

const Layout: FC<{ children: ReactElement }> = (props) => {
  let [visible, setVisible] = useState(false);

  function gotToTop() {
    if (window && visible) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function fadeButton() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;

    setVisible(scrollPos > 500);
  }

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", fadeButton);
    }
  }, []);

  return (
    <div className="flex flex-row">
      <div className="flex w-full flex-col">
        <Header />
        <SideBar />
        {props.children}
        <Footer />
      </div>
      <div
        onClick={gotToTop}
        className="sticky top-0 flex h-screen w-0 flex-col justify-end"
      >
        <button
          id="scrollBtn"
          className={`${visible ? "cursor-pointer opacity-100" : "cursor-default opacity-0"} absolute right-0 mb-10 mr-10 flex h-12 w-12 rounded-full bg-yellow-500 transition-all duration-150 hover:h-14 hover:w-14 hover:shadow-lg hover:shadow-blue-500`}
        >
          <svg
            className="m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{
              fill: "rgba(0, 0, 0, 1);transform: ;msFilter:",
            }}
          >
            <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Layout;
