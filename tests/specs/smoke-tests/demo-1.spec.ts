import {MainPage} from "../../pages/MainPage"

describe('Add TODO item: Main page', function () {
    beforeEach(function () {
        MainPage.open()
    })

    describe('1.[Main suite: page H4 Header]', function () {
        it('The H4 header should contain the "Add TODO item" text ', function () {
            expect(MainPage.h4header).toHaveText("Add TODO item")
        })
        it("Input field contains title: 'Title'", () => {
            const elem = MainPage.inputTitle
            expect(elem).toBeVisible()
            expect(elem).toHaveText("Title")
        });
        it("Input field is available", () => {
            expect(MainPage.inputField).toBeClickable()
        });
    })

    describe('2.[Main suite: User can create new TODO]', function () {
        it('After TODO creation new item added to the List', function () {
            const itemText = "Test more than 5 symbols"
            MainPage.fillInForm(itemText, "2020-04-01")
            browser.pause(1000)
            MainPage.sendForm()
            expect(MainPage.lastTableItemTitle).toHaveText(itemText)
        })
    })
    
    describe('3.[Main suite: User can complete exist TODO]', function () {
        it('After pressing the Complete btn - "true" class has been added', function () {
            MainPage.setAsComplete()
            expect(MainPage.firstTableItemTitle).toHaveClassContaining(' true')
        })
    })
})