describe("Integration tests - Home Page", () => {
    it("successfully loads", () => {
        cy.visit("/");
    });

    describe("links", () => {
        beforeEach(() => {
            cy.visit("/");
        });

        it("should jump to contact when clicked on Contact", () => {
            // given
            const linkEl = cy.get("a").contains("Contact");

            // when
            linkEl.click();

            // then
            cy.url().should("include", "#contact");
        });
    });
});
