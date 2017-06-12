import { ImpactoSalarioPage } from './app.po';

describe('impacto-salario App', () => {
  let page: ImpactoSalarioPage;

  beforeEach(() => {
    page = new ImpactoSalarioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
