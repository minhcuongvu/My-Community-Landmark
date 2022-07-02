import LandmarkApp from './components/LandmarkApp';
import FetchData from './components/FetchData';
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
  {
    path: '/fetch-data',
    element: <FetchData />,
  },
];

export default AppRoutes;
