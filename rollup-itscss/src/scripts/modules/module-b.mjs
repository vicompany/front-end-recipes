import { delay } from './delay.mjs';

export async function doStuff(el) {
	el.textContent = 'Loading...';
	el.disabled = true;

	await delay(2000);

	el.textContent = 'Do it again';
	el.disabled = false;
}
