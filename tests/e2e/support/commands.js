import "cypress-file-upload";

const METAMASK_WAIT = process.env.METAMASK_WAIT || 3000;
const RENDERER_WAIT = process.env.RENDERER_WAIT || 3000;

Cypress.Commands.add("waitAndUploadFile", (file) => {
  cy.get("input[type=file]").attachFile(file);
  cy.wait(RENDERER_WAIT);
});

Cypress.Commands.add("connectToMetamaskWalletAndApproveAllAccounts", () => {
  cy.get("[data-testid='connectToWallet']").click();
  cy.wait(METAMASK_WAIT);
  cy.acceptMetamaskAccess({ allAccounts: true }).then((connected) => {
    expect(connected).to.be.true;
  });
  cy.wait(METAMASK_WAIT);
});

Cypress.Commands.add("waitAndConfirmMetamaskTransaction", () => {
  cy.confirmMetamaskTransaction();
  cy.wait(METAMASK_WAIT);
});
