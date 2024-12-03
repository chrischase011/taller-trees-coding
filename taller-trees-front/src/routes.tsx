import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Export an array of route objects
const routes = [
  {
    path: "/",
    component: Index,
    exact: true, // This makes the route match exactly
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
  },
];

export default routes;
