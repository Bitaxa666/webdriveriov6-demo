import { BasePO } from "./Base";


export class MainPagePO extends BasePO {
  //TODO: replace any with an object model
  private pageSelectors: any;

  constructor() {
    super();
    this.pageSelectors = {
      h4header: "[data-testid='todo']",
      inputTitle: "[title='Title']",
      inputField: "input[type='text']",
      inputDate: ".ant-picker-input input",
      todayBtn: "a.ant-picker-today-btn",
      sendBtn: "button[type='Submit']",
      //TODO: need update selectors
      firstComplete: "tr.ant-table-row-level-0:first-child a[href='#complete']",
      firstTableItem: "tr.ant-table-row-level-0:first-child .ant-typography",
      lastTableItem: "tr.ant-table-row-level-0:last-child .ant-typography"
    }
  }

  get h4header() { return $(this.pageSelectors.h4header) }

  get inputTitle() { return $(this.pageSelectors.inputTitle) }

  get inputField() { return $(this.pageSelectors.inputField) }

  get inputDate() { return $(this.pageSelectors.inputDate) }

  get sendBtn() { return $(this.pageSelectors.sendBtn) }

  get setTodayBtn() { return $(this.pageSelectors.todayBtn) }  

  get firstTableItemTitle() { return $$(this.pageSelectors.firstTableItem)[0] }

  get firstTableItemDate() { return $$(this.pageSelectors.firstTableItem)[1] }
  
  get firstCompleteLink() { return $(this.pageSelectors.firstComplete) }

  get lastTableItemTitle() { return $$(this.pageSelectors.lastTableItem)[0] }

  get lastTableItemDate() { return $$(this.pageSelectors.lastTableItem)[1] }

  open() { super.open('/') }

  fillInForm(todoText: string, todoData: string, testPause?: number): void {
    this.inputField.waitForDisplayed({ timeout: 10000, reverse: false, timeoutMsg: "Input field isn't displayed" })
    this.inputField.setValue(todoText)
    this.inputDate.waitForDisplayed({ timeout: 10000, reverse: false, timeoutMsg: "Date field isn't displayed" })
    this.inputDate.click()
    this.setTodayBtn.waitForDisplayed({ timeout: 10000, reverse: false, timeoutMsg: "Today btn isn't displayed" })
    this.setTodayBtn.click({button: 0})
    if (!testPause) {
      browser.pause(300)
    }
    browser.pause(testPause)
  }

  sendForm(): void {
    this.sendBtn.waitForDisplayed({ timeout: 10000, reverse: false, timeoutMsg: "Send btn isn't displayed" })
    this.sendBtn.click()
  }
  //TODO: add random function for item
  setAsComplete(): void {
    this.firstCompleteLink.waitForDisplayed({ timeout: 10000, reverse: false, timeoutMsg: "CompleteLink btn isn't displayed" })
    this.firstCompleteLink.click()
  }
}

export const MainPage = new MainPagePO()