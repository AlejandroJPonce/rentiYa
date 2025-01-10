import LandingPage from '../pages/LandingPage'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboad';
import Pricing from '../pages/Pricing';

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

];
