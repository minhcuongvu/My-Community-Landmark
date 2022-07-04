import LandmarkApp from './components/LandmarkApp';
import Home from './components/Home';

const AppRoutes = [
  {
    index: true,
    element: <LandmarkApp />,
  },
  {
    path: '/LandmarkApp',
    element: <LandmarkApp />,
  },
];

export default AppRoutes;
