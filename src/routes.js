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

// voir doc : React-router Route Objects Example
//https://stackblitz.com/github/remix-run/react-router/tree/main/examples/route-objects?file=src%2FApp.tsx