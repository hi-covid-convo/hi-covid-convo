import { Selector } from 'testcafe';

class GeneralPage {
  constructor() {
    this.pageId = '#general-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const generalPage = new GeneralPage();
