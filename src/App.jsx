import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import Layout from "./routes/layout/layout.jsx";
import HomePage from "./routes/homePage/homePage.jsx";
import ListPage from "./routes/listPage/listPage.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import Profile from "./routes/profile/profile.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: '/list',
                    element: <ListPage />,
                },
                {
                    path: '/:id',
                    element: <SinglePage />
                },
                {
                    path: '/profile',
                    element: <Profile />
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App