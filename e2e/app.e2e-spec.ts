import { HouseholdDataClientPage } from './app.po';

describe('household-data-client App', function() {
  let page: HouseholdDataClientPage;

  beforeEach(() => {
    page = new HouseholdDataClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
