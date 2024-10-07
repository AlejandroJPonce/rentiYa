import LandingPage from '../pages/LandingPage'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];
