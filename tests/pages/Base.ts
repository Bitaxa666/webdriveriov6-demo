export class BasePO {
    open(url: string): void {
        console.log("Navigating to: ", url);
        browser.url(url);
    }
}