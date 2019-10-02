// Import any polyfills not in core-js here before main (e.g. whatwg-fetch)...
import 'dom4';
import 'core-js/es/promise'; // Using only async functions won't enable this polyfill.

import { main } from './main.mjs';

// Start the app.
main();
