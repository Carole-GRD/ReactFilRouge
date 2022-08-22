import About from "./pages/about/about";
import Home from "./pages/home/home";
import NotFound from "./pages/errors/not-found";
import Fruit from './pages/fruit/fruit';
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Auth from "./pages/auth";

// export const routes = [
//     {
//         path: '/',
//         element: <Home />
//     },
//     {
//         path: '/auth',
//         element: <Auth />,
//         children : [
//             { path: 'login' , element: <Login />},
//             { path: 'register' , element: <Register />}
//         ]
//     },
//     {
//         path: '/fruit',
//         element: <Fruit />
//     },
//     {
//         path: '/about',
//         element: <About />
//     },
//     {
//         path: '*',
//         element: <NotFound />
//     }
// ];

// voir doc : React-router Route Objects Example
//https://stackblitz.com/github/remix-run/react-router/tree/main/examples/route-objects?file=src%2FApp.tsx





// Les "slashs" ne sont pas obligatoires
export const routes = [
    {
        path: '',
        element: <Home />
    },
    {
        path: 'auth',
        element: <Auth />,
        children : [
            { path: 'login' , element: <Login />},
            { path: 'register' , element: <Register />}
        ]
    },
    {
        path: 'fruit',
        element: <Fruit />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: '*',
        element: <NotFound />
    }
];