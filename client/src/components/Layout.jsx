import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/Layout.css";

const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
