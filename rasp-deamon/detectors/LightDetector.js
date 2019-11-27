import { Observable } from 'rxjs';

const PIN_NUMBER = 4;
let _gpio;
let _pin;

const initialize = () => {
  // ! Check if this "conditional" require is still a thing
  try {
    _gpio = require('onoff').Gpio;
  } catch (error) {
    console.log('Raspberry environment is required!\nKilling the deamon...');
    process.exit(0);
  }
  
  if (!_gpio.accessible) {
    console.log('Raspberry GPIOs are not accessible!\nKilling the deamon...');
    process.exit(0);
  }
}

const quantity = new Observable(subscriber => {
  //* GPIO4 default value is 1. It has to be reset to 0.
  _pin = new _gpio(PIN_NUMBER, 'out');
  _pin.writeSync(0);
  _pin = new _gpio(PIN_NUMBER, 'in');

  for(;;) {
    let rcTime = 0;
    while (pin.readSync() === Gpio.LOW) {
      rcTime += 1;
    }
    subscriber.next(rcTime);
  }
})

export default Object.freeze({
  initialize,
  quantity,
});
