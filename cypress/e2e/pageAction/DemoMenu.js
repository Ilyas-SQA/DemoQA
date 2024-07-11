const LINK_DemoForms = '//div[@class="card-body"]//h5[text() = "Forms"]'
const Heading_demoForm = '//div[@class="main-header"]'
const LINK_DemopElementForm = '//h5[text() = "Elements"]'
const LINK_DemoPracticeForm = '//div[@class="element-list collapse show"]//ul//li//span[text() = "Practice Form"]'
const TXT_DemoFName = '//input[@id="firstName"]'
const TXT_DemoLName = '//input[@id="lastName"]'
const TXT_DemoEmail = '//input[@id="userEmail"]'
const RADIO_DemoRadioBTN = '//label[@for="gender-radio-1"]'
const TXT_DemoMobNo = '//input[@id="userNumber"]'
const TXT_DemoSubject = '//div[@class="css-1g6gooi"]//input[@id="subjectsInput"]'
const RADIO_DemoHobbies = '//div[@class="custom-control custom-checkbox custom-control-inline"]//input[@id="hobbies-checkbox-2"]'
const TXT_DemoAddress = '//textarea[@id="currentAddress"]'
const LINK_DemoElement = '(//span[@class="pr-1"])[1]'
const LINK_DemoTextBox = '//div[@class="element-list collapse show"]//ul//li//span[text() = "Text Box"]'
const DRP_DemoState = '//div[@id="state"]'
const DRP_DemoStatee = '//div[@id="react-select-3-option-0"]'
const DRP_DemoCity = '//div[@id="city"]'
const DRP_Democity = '//div[@id="react-select-4-option-0"]'
const DATE_Demo = '//input[@id="dateOfBirthInput"]'
const DATE_DemoDay = '(//div[text() = "4"])[1]'
const DATE_Month = '//div[@class="react-datepicker__header"]//div//div//select[@class="react-datepicker__month-select"]//option[text() = "February"]'
const DATE_Demoyear = '//select[@class="react-datepicker__year-select"]//option[@value="1997"]'
const MONTH_Demo = '//div//select[@class="react-datepicker__month-select"]'
const CHOOSE_DemoFile = '//input[@id="uploadPicture"]'
const BTN_DemoSubmit = '//button[@id="submit"]'
const BTN_DemoClose = '//button[@id="closeLargeModal"]'



//*********************   Selectors for Element DropDown Menu */
const DRP_DemoElement = '(//div[@class="card-up"])[1]'
const ICON_DemoIcon = '(//div[@class="icon"])[1]'
const LINK_DemoCheckBox = '//span[text() = "Check Box"]'
const BTN_DemoExpandBTN = '//div[@class="rct-options"]//button[@title="Expand all"]'
const CheckBox_Demo = '//li//span//input[@id="tree-node-commands"]'

//*********************   Selectors for Element RadioButton */
const BTN_DemoRadioBTN = '//span[text() = "Radio Button"]'
const RADIO_DemoRadioYes = '//div[@class="custom-control custom-radio custom-control-inline"]//input[@id="yesRadio"]'


//*********************** Selectors for web tables */
const LINK_DemoWebTables = '//div//ul//li[@id="item-3"]//span[text() = "Web Tables"]'
const BTN_DemoTableEdit = '//div[@class="action-buttons"]//span[@id="edit-record-1"]'
const TXT_demoName = '//input[@id="firstName"]'
const BTN_DemoSubmitt = '//button[@id="submit"]'
const BTN_DemoAddBtn = '//button[@id="addNewRecordButton"]'
const TXT_DemoTableLName = '//input[@id="lastName"]'
const TXT_DemoTableEmail = '//input[@id="userEmail"]'
const TXT_DemoTabelAge = '//input[@id="age"]'
const TXT_DemoTableSalary = '//input[@id="salary"]'
const TXT_DemoTableDpt = '//input[@id="department"]'
const BTN_DemoTableDelete = '//div//span[@id="delete-record-4"]'
const LINK__DemoButtons = '//div//ul//li[@id="item-4"]//span[text() = "Buttons"]'
const BTN_DemoDBLBtn = '//div//button[@id="doubleClickBtn"]'
const BTN_DemoRightClick = '//div//button[@id="rightClickBtn"]'
const SRCH_DemoSearchBar = '//input[@id="searchBox"]'
const NAME_DemoNameSlector = '//div[text() = "Ilyas"]'

//**********  Slider */
const LINK_DemoWidgets = '//div[@class="card-body"]//h5[text() = "Widgets"]'
const LINK_DemoSlider = '(//div//ul//li[@id="item-3"])[3]'
const SLIDER_Demo = '//input[@class="range-slider range-slider--primary"]'
const SLIDER_DemoValue = '//input[@id="sliderValue"]'

//********** date picker */
const LINK_DemoDatePicker = '//span[text() = "Date Picker"]'
const LINK_demoDatepicker = '//input[@id="datePickerMonthYearInput"]'

//**********  Progress Bar */
const PRGBAR_Demo = '//span[text() = "Progress Bar"]'
const PRGBAR_DemoStart = '//button[@id="startStopButton"]'
const PRGBAR_DemoStop = '//button[@id="startStopButton"]'


const Tab_demoTab = '//span[text() = "Tabs"]'
const Tab_demoOrigin = '//a[@id="demo-tab-origin"]'

const Tool_demo = '//span[text() = "Tool Tips"]'
const BTN_DemoToolBtn = '//button[@id="toolTipButton"]'
const LINK_DemoMenu = '//span[text() = "Menu"]'
const LINK_DemoMainMenu = '//div//ul[@id="nav"]//a[text() = "Main Item 2"]'
const LINK_DemoSubMenu = '//a[text() = "SUB SUB LIST »"]'
const LINK_DemoSubsubMenu = '//a[text() = "Sub Sub Item 1"]'


//********** Select Menu */
const LINK_DemoSelectMenu = '//span[text() = "Select Menu"]'
const DRP_DemoSelectValue = '//div[@id="withOptGroup"]'
const DRP_DemoSelectvalue = '//div[text() = "Group 1, option 1"]'


//********** Interaction ( Dropable) */
const LINK_DemoInteraction = '(//div[@class="element-group"])[5]'
const LINK_HeadingInteraction = '//h5[text() = "Interactions"]'
const LINK_DemoDroppable = '//span[text() = "Droppable"]'
const DRAG_DemoFElement = '//div[@id="draggable"]'
const DROP_DemoSecondElement = '(//div[@id="droppable"])[1]'

class DemoQA {


    DemoMenu() {


        //********** Click on Forms option and populate the form*/
        // cy.xpath(LINK_DemoForms).click()
        // cy.wait(4000)
        // cy.xpath(Heading_demoForm).should('contain', "Forms")
        // cy.wait(1000)
        // cy.xpath(LINK_DemoPracticeForm).click()
        // cy.wait(1000)
        // cy.EnterText(TXT_DemoFName, 'Ilyas')
        // cy.wait(2000)
        // cy.EnterText(TXT_DemoLName, 'Ahmad')
        // cy.wait(1000)
        // cy.EnterText(TXT_DemoEmail, 'Ilyas@gmail.com')
        // cy.wait(1000)
        // cy.xpath(RADIO_DemoRadioBTN).click()
        // cy.wait(2000)
        // cy.EnterText(TXT_DemoMobNo, '3402841744')
        // cy.wait(1000)

        // //click the date picker
        // cy.xpath(DATE_Demo).click()
        // cy.wait(2000)

        // cy.get(MONTH_Demo).click()

        // // cy.xpath(DATE_Month).click({ force: true })
        // // cy.wait(2000)
        // // cy.xpath(DATE_DemoDay).click()
        // // cy.wait(2000)
        // // cy.xpath(DATE_Demoyear).click()
        // // cy.wait(2000)

        // // choose file 
        // cy.xpath(CHOOSE_DemoFile).selectFile('OIP.jpg')
        // cy.wait(2000)
        // cy.EnterText(TXT_DemoSubject, 'English').type('{enter}')
        // cy.wait(1000)
        // cy.xpath(RADIO_DemoHobbies).click({ force: true })
        // cy.wait(2000)
        // cy.EnterText(TXT_DemoAddress, 'Peshawar')
        // cy.wait(2000)
        // cy.xpath(DRP_DemoState).click()
        // cy.wait(2000)
        // //cy.EnterText(DRP_DemoState, 'NCR').then(() => {
        // cy.xpath(DRP_DemoStatee).click()
        // cy.wait(2000)
        // cy.xpath(DRP_DemoCity).click()
        // cy.wait(2000)
        // //cy.EnterText(DRP_DemoState, 'NCR').then(() => {
        // cy.xpath(DRP_Democity).click()
        // cy.wait(2000)
        // cy.xpath(BTN_DemoSubmit).click()
        // cy.wait(2000)
        // cy.xpath(BTN_DemoClose).click()
        // cy.wait(2000)

        //************   element Drop down Menu (Select one module from drop down option*/
        // cy.xpath(DRP_DemoElement).click()
        // cy.wait(2000)
        // // cy.xpath(ICON_DemoIcon).click()
        // // cy.wait(2000)
        // cy.xpath(LINK_DemoCheckBox).click()
        // cy.wait(2000)

        // cy.xpath(BTN_DemoExpandBTN).click()
        // cy.wait(2000)
        // cy.xpath(CheckBox_Demo).click({ force: true })
        // cy.wait(2000)



        //****************  element  Menu (Select one module from Radio button option* */
        // cy.xpath(DRP_DemoElement).click()
        // cy.wait(2000)
        // cy.xpath(BTN_DemoRadioBTN).click()
        // cy.wait(2000)
        // cy.xpath(RADIO_DemoRadioYes).click({ force: true })
        // cy.wait(2000)



        //****************  element Menu (Select one module from Web tables option* */
        // cy.xpath(DRP_DemoElement).click()
        // cy.wait(2000)
        // cy.xpath(LINK_DemoWebTables).click()
        // cy.wait(2000)
        // cy.xpath(BTN_DemoTableEdit).click()
        // cy.wait(2000)
        // cy.xpath(TXT_demoName).clear()
        // cy.EnterText(TXT_demoName, 'Cierrra')
        // cy.wait(2000)
        // cy.xpath(BTN_DemoSubmitt).click()
        // cy.wait(2000)

        //********* Make a new client and delete it */
        cy.xpath(DRP_DemoElement).click()
        cy.wait(2000)
        cy.xpath(LINK_DemoWebTables).click()
        cy.wait(2000)
        cy.xpath(BTN_DemoAddBtn).click()
        cy.wait(2000)
        cy.EnterText(TXT_demoName, 'Ilyas')
        cy.wait(2000)
        cy.EnterText(TXT_DemoTableLName, 'Ahmad')
        cy.wait(2000)
        cy.EnterText(TXT_DemoTableEmail, 'Ilyas@gmail.com')
        cy.wait(2000)
        cy.EnterText(TXT_DemoTabelAge, '26')
        cy.wait(2000)
        cy.EnterText(TXT_DemoTableSalary, '25000')
        cy.wait(2000)
        cy.EnterText(TXT_DemoTableDpt, 'Computer Science')
        cy.wait(2000)
        cy.xpath(BTN_DemoSubmitt).click()
        cy.wait(2000)

        cy.xpath(BTN_DemoAddBtn).click()
        cy.wait(2000)

        //var firstName = faker.Name.findName() // Variable declaration
        // cy.xpath(TXT_demoName).type(faker.name()) // Use in locator



        // cy.EnterText(TXT_demoName, 'Ilyas')
        cy.wait(2000)
        cy.EnterText(TXT_DemoTableLName, 'Ahmad')
        cy.wait(2000)
        cy.EnterText(TXT_DemoTableEmail, 'Ilyasahmad@gmail.com')
        cy.wait(2000)
        cy.EnterText(TXT_DemoTabelAge, '26')
        cy.wait(2000)
        cy.EnterText(TXT_DemoTableSalary, '30000')
        cy.wait(2000)
        cy.EnterText(TXT_DemoTableDpt, 'Computer Science')
        cy.wait(2000)
        cy.xpath(BTN_DemoSubmitt).click()
        cy.wait(2000)
        cy.EnterText(SRCH_DemoSearchBar, 'Ilyas').click()
        cy.wait(2000)
        cy.xpath(BTN_DemoTableDelete).click()
        cy.wait(2000)



        //****************  element Menu (Select Buttons * */

        // cy.xpath(DRP_DemoElement).click()
        // cy.wait(2000)
        // cy.xpath(LINK__DemoButtons).click()
        // cy.wait(2000)
        // cy.xpath(BTN_DemoDBLBtn).dblclick()
        // cy.wait(2000)
        // cy.xpath(BTN_DemoRightClick).rightclick()



        //****************  Widgets Menu (date Picker) * */

        // cy.xpath(LINK_DemoWidgets).click()
        // cy.wait(2000)
        // cy.xpath(LINK_DemoDatePicker).click()
        // cy .wait(2000)
        // cy.xpath(LINK_demoDatepicker).click()
        // cy.wait(2000)

        // let date = new date()
        // date.setDate(date.getDate() + 1)
        // let futureDay = date.getDate()
        // let futureMonth = date.toLocalString('default', { month: 'short' })
        // let dateAssert = futureMonth + ' ' + date.getFullYear()

        // cy.wrap(input).invoke('prop', 'value').should('contin', dateAssert)








        //****************  Widgets Menu (Slider) * */

        // cy.xpath(LINK_DemoWidgets).click()
        // cy.wait(2000)
        // cy.xpath(LINK_DemoSlider).click()
        // cy.wait(2000)
        // cy.xpath(SLIDER_Demo).should('have.value', 25)
        //     .invoke('val', 50)
        //     .trigger('change')
        // cy.get(SLIDER_Demo).should('have.value', 50)
        // cy.wait(2000)



        //****************  Widgets Menu (Progress Bar) * */

        // cy.xpath(LINK_DemoWidgets).click()
        // cy.wait(2000)
        // cy.xpath(PRGBAR_Demo).click()
        // cy.wait(2000)
        // cy.xpath(PRGBAR_DemoStart).click()
        // cy.wait(2000)
        // cy.xpath(PRGBAR_DemoStop).click()

        //****************  Widgets Menu (Tabs) * */
        // cy.xpath(LINK_DemoWidgets).click()
        // cy.xpath(Tab_demoTab).click()
        // cy.xpath(Tab_demoOrigin).click()


        //****************  Widgets Menu (Menu) * */
        // cy.xpath(LINK_DemoWidgets).click()
        // cy.wait(2000)
        // cy.xpath(LINK_DemoMenu).click()
        // cy.wait(2000)
        // cy.xpath(LINK_DemoMainMenu).click({ force: true })
        // cy.wait(5000)
        // cy.xpath(LINK_DemoSubMenu).click({ force: true })
        // cy.wait(5000)
        // cy.xpath(LINK_DemoSubsubMenu).trigger('mouseover')


        //****************  Widgets Menu (Select Menu) * */

        // cy.xpath(LINK_DemoWidgets).click()
        // cy.wait(2000)
        // cy.xpath(LINK_DemoSelectMenu).click()
        // cy.wait(2000)
        // cy.xpath(DRP_DemoSelectValue).click()
        // cy.wait(2000)
        // cy.xpath(DRP_DemoSelectvalue).click()
        // cy.wait(2000)





        // }


        // Dragdrop() {

        //****************  interaction (Drag and drop) * */


        // cy.xpath(LINK_HeadingInteraction).click()
        // cy.wait(2000)
        // cy.xpath(LINK_DemoInteraction).click()
        // cy.wait(2000)
        // cy.xpath(LINK_DemoDroppable).click()
        // cy.wait(2000)
        // //cy.xpath(DRAG_DemoFElement).drag(DROP_DemoSecondElement, ({ force: true }))

        // // cy.xpath(DRAG_DemoFElement).drag('#mydropzone').then((success) => {
        // //     assert.isTrue(success)

        // // }

        // cy.xpath(DRAG_DemoFElement)
        //     .trigger('dragstart')
        // cy.xpath(DROP_DemoSecondElement)
        //     .trigger('drop')


    }

}



export default new DemoQA