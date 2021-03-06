import { Selector } from "testcafe";

fixture`Visit GL Cyber Securty`
.page`https://www.mygreatlearning.com/online-cyber-security-course`

const name=Selector('#name')
const phone=Selector('#phone')
const email=Selector('#email')
const city=Selector('#myCity')
// const cityOption =citySelect.find('option')

test('Cyber Security Course for Less than 1 Year ', async t =>{
    await t
    .click('#top-banner-button-section > div.application-btn-section > a')
    // .click('a.btn yellow-transparent-button btn-style fixed-size-btn track-click-mp')
    .typeText(name,'Radhey Shyam')
    // .expect(name.value).notOk("Name field assertion will fail")
    .typeText(phone,'8237492839')
    .typeText(email,'radheyshyam@gmail.com')
    .typeText(city,'Jhansi')
    
    //Click to next button
    .click('#app_step_1')

    const experienceSelect=Selector('#experience')
    const experienceOption=experienceSelect.find('option')
    await t
    .click(experienceSelect)
    .click(experienceOption.withText('Less than 1 Year'))
    // .expect(experienceSelect.value).eql('<1 Year')
    // .expect(experienceSelect.value).notOk('Experiance asserion will fail')

    .typeText('#curr_org','Great Learning')
    .click('#organisation_details .check-icon')

    const currMonthSelect=Selector('#from_month1')
    const currMonthOption=currMonthSelect.find('option')
    await t
    .click(currMonthSelect)
    .click(currMonthOption.withText('February'))

    const currYearSelect=Selector('#from_year1')
    const currYearOption=currYearSelect.find('option')
    await t
    .click(currYearSelect)
    .click(currYearOption.withText('2022'))

    // Job Title
    await t
    .typeText('#curr_designation','Software Engineering')
    
    const industrySelect=Selector('#industry')
    const industryOption=industrySelect.find('option')
    await t
    .click(industrySelect)
    .click(industryOption.withText('IT & Technology'))

    
    const progammingKnowSelect=Selector('#programming_exp_in_years')
    const  progammingKnowOption=progammingKnowSelect.find('option')
    await t
    .click(progammingKnowSelect)
    .click(progammingKnowOption.withText('1-2 Years'))
    .expect(progammingKnowSelect.value).eql('1-2 Years')

    .click('#languages > .row .row > div:nth-of-type(1) .check-icon')
    .click('#languages div:nth-of-type(6) .check-icon')
    .click('#languages div:nth-of-type(2) .check-icon')
    
    // click to next button
    .click('#professional_section')

    // Undergraduation form
    const degreeSelect=Selector('#grad_degree')
    const degreeOption=degreeSelect.find('option')
    await t
    .click(degreeSelect)
    .click(degreeOption.withText('B.E./B.Tech.'))
    .expect(degreeSelect.value).eql('B.E./B.Tech.')

    const gredYearSelect=Selector('#grad_year')
    const gredYearOption=gredYearSelect.find('option')
    await t
    .click(gredYearSelect)
    .click(gredYearOption.withText('2021'))
    .expect(gredYearSelect.value).eql('2021')

    .typeText('#grad_specialization','Computer Science')
    .typeText('#grad_college','Bundelkhand University, Jhansi')

    .typeText('#grad_cgpa','-7.3')

    // click on next button
    .click('#prof_details_end')

    .typeText('#linkedinurl','https://www.linkedin.com/in/profile/')

    
    .setFilesToUpload('#resume','resume.pdf')

    .click('#upload_next')

    .typeText('#new_question1','This is great opportunity for me to  start career in cybersecurity')

    .click('#step_4 > div:nth-child(6) > div > div > label > span')
    // .click('.check-icon')

    // click on submit Application button
    .click('#submit_app')
    
    // enter password
    .typeText('#password','password@123')

    // Enter to login button
    // .click('#user-signup-btn')
    // .click('#recaptcha_app_log_in_button')
})