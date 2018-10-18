export const msg = async (text, el = document.querySelector('main')) => {
	const p = document.createElement('p');

	p.textContent = text;

	el.appendChild(p);

	return p;
};
