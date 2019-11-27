import './initialization';

import LightDetector from './detectors/LightDetector';

LightDetector.quantity.subscribe({
  next: console.log,
});