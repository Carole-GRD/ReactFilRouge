import About from "./pages/about/about";
import Home from "./pages/home/home";
import NotFound from "./pages/errors/not-found";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '*',
        element: <NotFound />
    }
];