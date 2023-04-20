/* eslint-disable no-undef */
const assert = require('assert');
// const { async } = require('regenerator-runtime');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.restaurants');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurants');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurants');

  I.amOnPage('/');
  pause();
  I.seeElement('.restaurant__name a');
  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unlike restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurants');

  I.amOnPage('/');
  pause();
  I.seeElement('.list__item a');
  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__name');
  I.click(locate('.restaurant__name').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurants');
  pause();

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
