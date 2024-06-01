import { FC, ReactElement } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<{ children: ReactElement }> = (props) => {
  return (
    <div className="flex flex-col">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
