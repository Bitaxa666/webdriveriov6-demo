import { BasePO } from "./Base";


export class MainPagePO extends BasePO {
  //TODO: replace any with an object model
  private pageSelectors: any;

  constructor() {
    super();
    this.pageSelectors = {
      h4header: "[data-testid='todo']",
      inputTitle: "[title='Title']",
      inputField: "input[type='text']"
    }
  }

  get h4header() { return $(this.pageSelectors.h4header); }

  get inputTitle() { return $(this.pageSelectors.inputTitle); }

  get inputField() { return $(this.pageSelectors.inputField); }

  open() { super.open('/'); }

  inputTodo (todoText: string, testPause?: number):void {
    this.inputField.waitForDisplayed({timeout: 10000, reverse: false, timeoutMsg: "Input modal isn't displayed"});
    this.inputField.setValue(todoText);
    if (!testPause) {
      browser.pause(500);
    }
    browser.pause(testPause);
  }
}

export const MainPage = new MainPagePO();