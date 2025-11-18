describe("Cart functionality", () => {
  beforeEach(() => {
    cy.visit("/"); // Visit MenuPage
  });

  it("adds an item to the cart", () => {
    // Click Add to Cart button on first menu item
    cy.get("ion-card.menu-card")
      .first()
      .within(() => {
        cy.get("[data-cy=add-to-cart]").click();
      });

    // Go to cart
    cy.get("ion-tab-button[href='/cart']").click();

    // Check that cart has 1 item
    cy.get("ion-card.cart-item-card").should("have.length", 1);

    // Verify Total Amount
    cy.get("h2").contains("Total Amount: ₱");
  });

  it("updates quantity in the cart", () => {
    // Add first item
    cy.get("ion-card.menu-card")
      .first()
      .within(() => {
        cy.get("[data-cy=add-to-cart]").click();
      });

    cy.get("ion-tab-button[href='/cart']").click();

    // Update quantity
    cy.get("ion-card.cart-item-card")
      .first()
      .find("[data-cy=cart-quantity] input")
      .clear()
      .type("3")
      .blur();

    // Total Amount should reflect new quantity
    cy.get("h2").contains("Total Amount: ₱");
  });

  it("removes item from cart", () => {
    // Add first item
    cy.get("ion-card.menu-card")
      .first()
      .within(() => {
        cy.get("[data-cy=add-to-cart]").click();
      });

    cy.get("ion-tab-button[href='/cart']").click();

    // Remove item
    cy.get("ion-card.cart-item-card")
      .first()
      .find("[data-cy=remove-item]")
      .click();

    // Cart should be empty
    cy.contains("Your cart is empty").should("exist");
  });

  it("proceeds to checkout", () => {
    // Add first item
    cy.get("ion-card.menu-card")
      .first()
      .within(() => {
        cy.get("[data-cy=add-to-cart]").click();
      });

    cy.get("ion-tab-button[href='/cart']").click();

    // Click Checkout button
    cy.get("[data-cy=checkout-button]").click();

    // Verify URL contains /checkout
    cy.url().should("include", "/checkout");
  });
});
