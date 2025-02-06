import { name } from '../package.json';
import { validatePassword } from "./validation.ts";

const init = async () => {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) {
    throw new Error('App element not found');
  }

  app.innerHTML = `
    <div class="container mx-auto py-12">
      <h1 class="text-2xl font-bold mb-[1em]">${name}</h1>
      <div class="grid gap-y-12">
        <form>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700" for="password">パスワード</label>
            <input type="text" name="password" id="password" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <ul class="mb-8">
            <li>6文字以上</li>
            <li>大文字小文字の英数字、記号をそれぞれ1文字以上含む</li>
          </ul>
          <button type="submit" class="bg-indigo-600 text-white p-[0.4em_1em] rounded">Submit</button>
        </form>
        <p class="text-xl font-bold" id="result"></p>
      </div>
    </div>
  `
}

const render = async () => {
  const form = document.forms[0];
  const result = document.querySelector<HTMLParagraphElement>('#result');

  if (!form || !result) {
    throw new Error('Form or result element not found');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const password = formData.get('password') as string;

    if (validatePassword(password)) {
      result.classList.remove('text-red-600');
      result.classList.add('text-green-600');
      result.textContent = 'OK';
    } else {
      result.classList.remove('text-green-600');
      result.classList.add('text-red-600');
      result.textContent = 'NG';
    }
  });
}

const setup = async () => {
  await init();
  await render();
}

setup();