import { delay } from './delay.mjs';

const asyncMessage = async text => `Async: ${text}`;

export async function msg(text, el = document.querySelector('main')) {
	const p = document.createElement('p');

	p.textContent = 'Loading...';

	el.appendChild(p);

	await delay(2500);

	p.textContent = await asyncMessage(text);

	return p;
}
