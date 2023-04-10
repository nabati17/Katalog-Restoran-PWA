import Restaurants from '../views/pages/Home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurants, // default page
  '/home': Restaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
