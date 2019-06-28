const delay = (timeout = 500) => new Promise(r => setTimeout(r, timeout));

const asyncMessage = async msg => `Async: ${msg}`;

export const msg = async (text, el = document.querySelector('main')) => {
	const p = document.createElement('p');

	p.textContent = 'Loading...';

	el.appendChild(p);

	await delay(2500);

	p.textContent = await asyncMessage(text);

	return p;
};
