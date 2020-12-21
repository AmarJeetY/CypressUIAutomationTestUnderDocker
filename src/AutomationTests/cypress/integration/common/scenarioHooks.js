/* eslint-disable no-undef */
beforeEach(() => {
  cy.log(
    "This will run before every scenario"
  );
});

afterEach(() => {
  // eslint-disable-next-line no-undef
  cy.log(
    "This will run after every scenario"
  );
});
