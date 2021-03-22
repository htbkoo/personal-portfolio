describe("Integration tests - Home Page", () => {
    it("successfully loads", () => {
        cy.visit("/");
    });

    describe("links", () => {
        beforeEach(() => {
            cy.visit("/");
        });
        [
            { linkText: "About", expectedUrlAnchor: "#about" },
            { linkText: "Portfolio", expectedUrlAnchor: "#portfolio" },
            { linkText: "Contact", expectedUrlAnchor: "#contact" },
        ].forEach(({ linkText, expectedUrlAnchor }) =>
            it(`should jump to "${expectedUrlAnchor}" when clicked on link "${linkText}"`, () => {
                // given
                const linkEl = cy.get("a").contains(linkText);

                // when
                linkEl.click();

                // then
                cy.url().should("include", expectedUrlAnchor);
            }),
        );
    });
});
