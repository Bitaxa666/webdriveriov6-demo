import {MainPage} from "../../pages/MainPage"

describe('Add TODO item: Main page', function () {
    beforeEach(function () {
        MainPage.open();
    })
    describe('1.[Main suite: page H4 Header]', function () {
        it('The H4 header should contain the "Add TODO item" text ', function () {
            expect(MainPage.h4header).toHaveText("Add TODO item11");
        })
        it("Input field contains title: 'Title'", () => {
            const elem = MainPage.inputTitle
            expect(elem).toBeVisible()
            expect(elem).toHaveText("Title");
        });
        it("Input field is available", () => {
            expect(MainPage.inputField).toBeClickable()
        });
    })
})