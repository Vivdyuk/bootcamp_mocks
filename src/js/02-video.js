import Player from '@vimeo/player';
import * as _ from 'lodash';

function saveVideoPlayerTime() {
  const iframe = document.querySelector('#vimeo-player');
  const player = new Player(iframe);
  const localStorageKey = 'videoplayer-current-time';

  player.setCurrentTime(localStorage.getItem(localStorageKey) || 0);

  player.on('timeupdate', _.throttle((currentTime) => {
    localStorage.setItem(localStorageKey, currentTime.seconds);
  }, 1000));
}

saveVideoPlayerTime();
