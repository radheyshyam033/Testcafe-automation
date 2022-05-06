import { Selector } from "testcafe";

fixture`Visit GL Cyber Securty`
  .page`https://www.mygreatlearning.com/online-cyber-security-course`;

test("Cyber Security Course for Less than 1 Year ", async (t) => {
  await basicInformation(t);

  await professionalDetails(t);

  await programmingKnowledge(t);

  await education(t);

  await shareProfile(t);

  await statementOfPurpose(t);

  await signupApplication(t);
});

async function basicInformation(t) {
    const name = Selector("#name");
    const phone = Selector("#phone");
    const email = Selector("#email");
    const city = Selector("#myCity");
  await t
    .click("#top-banner-button-section > div.application-btn-section > a")
    // .click('a.btn yellow-transparent-button btn-style fixed-size-btn track-click-mp')
    .typeText(name, "RadheyShyam")
   
    .typeText(phone, "8237492839")
    .expect(phone.value).eql("8237492839")
    .typeText(email, "radheyshyam@gmail.com")
    .expect(email.value).eql("radheyshyam@gmail.com")
    .typeText(city, "Jhansi")
    .expect(city.value).eql("Jhansi")

    //Click to next button
    .click("#app_step_1");
}

async function professionalDetails(t) {
  const experienceSelect = Selector("#experience");
  const experienceOption = experienceSelect.find("option");
  await t
    .click(experienceSelect)
    .click(experienceOption.withText("Currently a college student"))
    // .expect(experienceSelect.value).eql('Currently a college student')
    .expect(experienceSelect.value).eql("College Student");
}

async function programmingKnowledge(t) {
  const progammingKnowSelect = Selector("#programming_exp_in_years");
  const progammingKnowOption = progammingKnowSelect.find("option");
  await t
    .click(progammingKnowSelect)
    .click(progammingKnowOption.withText("1-2 Years"))
    .expect(progammingKnowSelect.value)
    .eql("1-2 Years")

    .click("#languages > .row .row > div:nth-of-type(1) .check-icon")
    .click("#languages div:nth-of-type(6) .check-icon")
    .click("#languages div:nth-of-type(2) .check-icon")

    // click to next button
    .click("#professional_section");
}

async function education(t) {
  const degreeSelect = Selector("#grad_degree");
  const degreeOption = degreeSelect.find("option");
  await t
    .click(degreeSelect)
    .click(degreeOption.withText("B.E./B.Tech."))
    .expect(degreeSelect.value)
    .eql("B.E./B.Tech.");

  const gredYearSelect = Selector("#grad_year");
  const gredYearOption = gredYearSelect.find("option");
  await t
    .click(gredYearSelect)
    .click(gredYearOption.withText("2022"))
    .expect(gredYearSelect.value)
    .eql("2022")

    .typeText("#grad_specialization", "Computer Science")
    .typeText("#grad_college", "Bundelkhand University, Jhansi")

    .typeText("#grad_cgpa", "-7.3")

    // click on next button
    .click("#prof_details_end");
}

async function shareProfile(t) {
    const resume=Selector("#resume")
  await t
    .typeText("#linkedinurl", "https://www.linkedin.com/in/profile/")

    .setFilesToUpload(resume, "resume.pdf")

    .click("#upload_next")

}

async function statementOfPurpose(t) {
  await t
    .typeText(
      "#new_question1",
      "This is great opportunity for me to  start career in cybersecurity"
    )

    .click("#step_4 > div:nth-child(6) > div > div > label > span")
    // .click('.check-icon')

    // click on submit Application button
    .click("#submit_app");
}

async function signupApplication(t) {
  await t
    // enter password
    .typeText("#password", "password@123")

    // Enter to login button
    // .click("#user-signup-btn");
//   
}
