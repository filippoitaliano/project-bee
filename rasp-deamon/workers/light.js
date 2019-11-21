let Gpio = null;
try {
  Gpio = require('onoff').Gpio;
} catch (error) {
  console.error(error);
  console.log('Raspberry environment is required!\nKilling the process...');
  process.exit(0);
}

if (!Gpio.accessible) {
  console.log('Raspberry GPIOs are not accessible!\nKilling the process...');
  process.exit(0);
}

const fotoresistor = 4;

const reset_pin = () => {
  const pin = new Gpio(fotoresistor, 'out');
  pin.writeSync(0);
};

const rc_time = () => {
  // GPIO4 default is 1. It has to be 0.
  reset_pin();

  const pin = new Gpio(fotoresistor, 'in');

  let count = 0;
  while (pin.readSync() === Gpio.LOW) {
    count += 1;
  }

  return count;
};

while (true) {
  console.log(rc_time());
}
