import { GuildTreePage } from './app.po';

describe('guild-tree App', function() {
  let page: GuildTreePage;

  beforeEach(() => {
    page = new GuildTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
