import RestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <div class="jumbotron">
    <div class="boxjubotron">
      <h1
        class="title-jumbotron"
        id="about"
      >
        Welcome to Eatery
      </h1>
      <p class="text-jumbotron">"We serve <span>cheap</span> but not <span>cheap food</span>"</p>
    </div>
    
  </div>
      <div class="content">
        <h1 class="content__heading">Explore Restaurant</h1>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const moviesContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
