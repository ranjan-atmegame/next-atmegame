import dynamic from "next/dynamic";
import Header from "./Header";
import Category from "@/components/category/main";

const Footer = dynamic(() => import("./Footer"));
const ErrorBoundary = dynamic(() => import("@/components/ErrorBoundary"));
const ToasterMessage = dynamic(() => import("./ToasterMessage"));

// import Footer from "./Footer";
import { main } from "./common.module.css";
// import ErrorBoundary from "@/components/ErrorBoundary";
// import ToasterMessage from "./ToasterMessage";

export default function Layout({ children }) {
  return (
    <div className={main}>
      <ToasterMessage />
      <ErrorBoundary>
        <div className="mainHeader">
          <Header />
          <Category />
        </div>
        {children}
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
