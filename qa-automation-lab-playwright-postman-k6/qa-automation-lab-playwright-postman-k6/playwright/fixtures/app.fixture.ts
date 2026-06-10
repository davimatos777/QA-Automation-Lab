import { test as base } from '@playwright/test';
import { CadastroPage } from '../pages/CadastroPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { TransferenciaPage } from '../pages/TransferenciaPage';
import { ExtratoPage } from '../pages/ExtratoPage';

type AppFixtures = {
  cadastroPage: CadastroPage;
  loginPage: LoginPage;
  homePage: HomePage;
  transferenciaPage: TransferenciaPage;
  extratoPage: ExtratoPage;
};

export const test = base.extend<AppFixtures>({
  cadastroPage: async ({ page }, use) => {
    await use(new CadastroPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  transferenciaPage: async ({ page }, use) => {
    await use(new TransferenciaPage(page));
  },
  extratoPage: async ({ page }, use) => {
    await use(new ExtratoPage(page));
  },
});

export { expect } from '@playwright/test';
