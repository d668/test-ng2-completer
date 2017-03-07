import { Pr1Page } from './app.po';

describe('pr1 App', function() {
  let page: Pr1Page;

  beforeEach(() => {
    page = new Pr1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
