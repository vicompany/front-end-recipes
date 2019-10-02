import { msg } from './modules/module-a.mjs';

export async function main() {
	await msg('Hello from the future! 😎');

	document
		.querySelector('.js-button')
		.addEventListener('click', async ({ target }) => {
			const { doStuff } = await import('./modules/module-b.mjs');

			doStuff(target);
		});
}
