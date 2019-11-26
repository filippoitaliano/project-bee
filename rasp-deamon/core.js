import './initialization';

import LightDetector from './detectors';

LightDetector.quantity.subscribe({
  next: console.log,
});