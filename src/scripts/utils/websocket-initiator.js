import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);

    // console.log(restaurant);
    NotificationHelper.sendNotification({
      title: `${restaurant.title} is on Restaurant!`,
      options: {
        body: restaurant.poster_path,
        image: `${CONFIG.BASE_IMAGE_URL + restaurant.overview}`,
      },
    });
  },
};

export default WebSocketInitiator;
