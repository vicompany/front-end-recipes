import 'dom4';
import 'core-js/modules/es6.promise'; // Using only async functions won't enable this polyfill.

import { msg } from './modules/module-a.mjs';

(async () => {
	await msg('Hello from the dark past of the interwebs. 😢');
})();
