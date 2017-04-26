import { HttpDeletePage } from './app.po';

describe('http-delete App', function() {
  let page: HttpDeletePage;

  beforeEach(() => {
    page = new HttpDeletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
