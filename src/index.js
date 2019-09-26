import _ from 'lodash';
import './app.scss';
import Icon from './icon.png';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon).setAttribute('width', '15px');;

  return element;
}

document.body.appendChild(component());
