import 'dom4';
import 'core-js/es/promise'; // Using only async functions won't enable this polyfill.

import { msg } from './modules/module-a.mjs';

(async () => {
	await msg('Hello from the dark past of the interwebs. 😢');
})();
