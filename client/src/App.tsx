import { useState, useEffect } from "react";
import { Route, Switch } from "wouter";
import "./App.css";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";
import Services from "./pages/PersonalBranding";
import VideoEditing from "./pages/VideoEditing";
import SEO from "./pages/SEO";
import WebDevelopment from "./pages/WebDevelopment";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Loader isLoading={isLoading} />
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/video-editing" component={VideoEditing} />
          <Route path="/seo" component={SEO} />
          <Route path="/web-development" component={WebDevelopment} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
