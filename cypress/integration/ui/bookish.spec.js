import axios from "axios";

describe("Bookish application", function () {
  before(async () => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });
  afterEach(async () => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  beforeEach(async () => {
    const books = [
      {
        name: "Refactoring",
        id: 1,
      },
    ];
    return books.map(async (item) => {
      await axios.post("http://localhost:8080/books", item, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
  });
  it("Visit the bookish", function () {
    cy.visit("http://localhost:3000");
    cy.get('h2[data-test="heading"]').contains("Bookish");
  });

  it("Show a book list", () => {
    cy.visit("http://localhost:3000");
    cy.get('div[data-test="book-list"]').should("exist");

    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(1);

      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);

      expect(titles).to.deep.equal(["Refactoring"]);
    });
  });

  it("Goes to detail page", () => {
    cy.visit("http://localhost:3000");
    cy.get("div.book-item").contains("View Details").eq(0).click();
    cy.url().should("include", "/books/1");
    cy.get("h2.book-title").contains("Refactoring");
  });

  it("Searches for a title", () => {
    cy.visit("http://localhost:3000");
    cy.get("div.book-item").should("have.length", 1);
    cy.get('[data-test="search"] input').type("Refactoring");
    cy.get("div.book-item").should("have.length", 1);
    cy.get("div.book-item").eq(0).contains("Refactoring");
  });
});
