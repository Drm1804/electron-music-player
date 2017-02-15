import { ElectronMusicPlayerPage } from './app.po';

describe('electron-music-player App', function() {
  let page: ElectronMusicPlayerPage;

  beforeEach(() => {
    page = new ElectronMusicPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
