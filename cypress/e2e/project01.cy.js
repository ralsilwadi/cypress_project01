/// <reference types="cypress" />

describe("Homework01", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-1");
  });

  it("Test Case 01 - Validate the Contact Us information", () => {
    cy.get(".mb-5 h1").should("have.text", "Contact Us");
    cy.get("#address").should(
      "have.text",
      "2800 S River Rd Suite 310, Des Plaines, IL 60018"
    );
    cy.get("#email").should("have.text", "info@techglobalschool.com");
    cy.get("#phone-number").should("have.text", "(224) 580-2150");
  });

  it("Test Case 02 - Validate the Full name input box", () => {
    cy.get(".field > label").eq(0).should("have.text", "Full name *");

    cy.get(".control >.input")
      .eq(0)
      .should("have.attr", "placeholder", "Enter your full name")
      .and("be.visible")
      .and("have.attr", "required");
  });

  it("Test Case 03 - Validate the Gender radio button", () => {
    const buttons = ["Male", "Female", "Prefer not to disclose"];

    cy.get(".control > .label").should("have.text", "Gender *");

    cy.get(".mr-1").should("have.attr", "required");

    cy.get(".radio").each(($el, index) => {
      cy.wrap($el).should("have.text", buttons[index]);
      cy.wrap($el).children().should("be.enabled").and("not.be.checked");
    });

    cy.get(".radio input").eq(0).click();
    cy.get(".radio").each(($el, index) => {
      if ($el.text() === "Male") cy.wrap($el).children().should("be.checked");
      else cy.wrap($el).children().should("not.be.checked");
    });

    cy.get(".radio input").eq(1).click();
    cy.get(".radio").each(($el, index) => {
      if ($el.text() === "Female") cy.wrap($el).children().should("be.checked");
      else cy.wrap($el).children().should("not.be.checked");
    });
  });

  it("Test Case 04 - Validate the Address input box", () => {
    cy.get(".control > .input")
      .eq(1)
      .should("have.attr", "placeholder", "Enter your address")
      .and("be.visible")
      .and("not.have.attr", "required");

    cy.get(".label").eq(2).should("have.text", "Address");
  });

  it("Test Case 05 - Validate the Email input box", () => {
    cy.get(".control > .input")
      .eq(2)
      .should("have.attr", "placeholder", "Enter your email")
      .and("be.visible")
      .and("have.attr", "required");

    cy.get(".label").eq(3).should("have.text", "Email *");
  });

  it("Test Case 06 - Validate the Phone input box", () => {
    cy.get(".control > .input")
      .eq(3)
      .should("have.attr", "placeholder", "Enter your phone number")
      .and("be.visible")
      .and("not.have.attr", "required");

    cy.get(".label").eq(4).should("have.text", "Phone");
  });

  it("Test Case 07 - Validate the Message text area", () => {
    cy.get(".textarea")
      .should("have.attr", "placeholder", "Type your message here...")
      .and("be.visible")
      .and("not.have.attr", "required");

    cy.get(".label").eq(5).should("have.text", "Message");
  });

  it("Test Case 08 - Validate the Consent checkbox", () => {
    cy.get(".checkbox")
      .should("have.text", " I give my consent to be contacted.")
      .children()
      .click()
      .should("be.checked")
      .click()
      .should("not.be.checked")
      .and("is.enabled")
      .and("have.attr", "required");
  });

  it("Test Case 09 - Validate the SUBMIT button", () => {
    cy.get(".button")
      .should("be.visible")
      .and("is.enabled")
      .and("has.text", "SUBMIT");
  });

  it("Test Case 10 - Validate the form submission", () => {
    cy.get(".control >.input").eq(0).type("Hello World");

    cy.get(".mr-1").eq(0).click();

    cy.get(".control > .input").eq(1).type("123 Hello World Street");

    cy.get(".control > .input").eq(2).type("hello_world@gmail.com");

    cy.get(".control > .input").eq(3).type("(890) 123-4567");

    cy.get(".textarea").type("Hello, World :)");

    cy.get('.checkbox > input').click()

    cy.get(".button").click()

    cy.get('strong').should('have.text', 'Thanks for submitting!')
  });
});
