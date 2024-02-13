import './App.css';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Technologies from './components/Technologies';
import ReactTech from './components/ReactTech';
import AngularTech from './components/AngularTech'
import VueTech from './components/VueTech'
import ErrorPage from './components/ErrorPage';


function App() {

  const routerObj = createBrowserRouter([
    //routing details
    {
      path:'/',
      element:<RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        //route for home
        {
          path:'/',
          element: <Home/>
        },//route for register
        {
          path:'/register',
          element: <Register/>
        },//route for Login
        {
          path:'/login/:username',
          element:<Login/>
        },//route for Technologies
        {
          path:'/technologies',
          element:<Technologies/>,
          children:[
            {
              path:'react',
              element:<ReactTech/>
            },
            {
              path:'angular',
              element:<AngularTech/>
            },
            {
              path:'vue',
              element:<VueTech/>
            }
          ]
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={routerObj}/>
    </div>
  );
}

export default App;
