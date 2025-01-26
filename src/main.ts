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
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700" for="password">パスワード</label>
            <input type="password" name="password" id="password" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <button type="submit" class="bg-indigo-600 text-white p-[0.4em_1em] rounded">Submit</button>
        </form>
        <p id="result"></p>
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
      result.textContent = 'OK';
    } else {
      result.textContent = 'NG';
    }
  });
}

const setup = async () => {
  await init();
  await render();
}

setup();