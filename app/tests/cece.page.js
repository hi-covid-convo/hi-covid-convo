import { Selector } from 'testcafe';

class CecePage {
  constructor() {
    this.pageId = '#cece-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoFeedback(testController) {
    await this.isDisplayed(testController);
    await testController.click('#feedback');
  }
}

export const cecePage = new CecePage();
