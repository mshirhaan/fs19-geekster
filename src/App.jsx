import "./App.css";

import Contact from "./Contact";
import About from "./About";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

// function App() {
//   let location = window.location.href;
//   let routes = location.split("/");
//   let url = routes[routes.length - 1];

//   let content;

//   if (url === "contact") {
//     content = <Contact />;
//   } else if (url === "about") {
//     content = <About />;
//   }

//   return <div>{content}</div>;
// }

// function App() {
//   const router = createBrowserRouter([
//     { path: "/about", element: <About /> },
//     { path: "/contact", element: <Contact /> },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
