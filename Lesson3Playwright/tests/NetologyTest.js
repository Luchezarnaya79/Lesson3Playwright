import { validUser, validPassword, unUser, unPassword } from "./user.js";
const { test, expect } = require("@playwright/test");

test("Успешная авторизация", async ({ page }) => {
  // Идем на страницу авторизации
  await page.goto("https://netology.ru/?modal=sign_in");

  // Добавляем email в поле для ввода email
  await page.fill("input[placeholder='Email']", validUser.email);

  // Добавляем пароль в поле для ввода пароля
  await page.fill("input[placeholder='Пароль']", validPassword.password);

  // Нажимаем на кнопку Войти
  await page.click("text=Войти");

  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(
    page.getByRole('link', { name: 'Моё обучение' })).toBeVisible();
  await page.close();
});

test("Неуспешная авторизация", async ({ page }) => {
  // Идем на страницу авторизации
  await page.goto("https://netology.ru/?modal=sign_in");

  // Добавляем email в поле для ввода email
  await page.fill("input[placeholder='Email']", unUser.uncorrectEmail);

  // Добавляем пароль в поле для ввода пароля
  await page.type("input[placeholder='Пароль']", unPassword.uncorrectPassword);

  // Нажимаем на кнопку Войти
  await page.click("text=Войти");

  await expect(
    page.getByTestId('login-error-hint')).toBeVisible();

  await page.close();
});