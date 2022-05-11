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
        id: "1",
      },
      {
        name: "Domain-driven design",
        id: "2",
      },
      {
        name: "Building microservices",
        id: "3",
      },
    ];
    return Promise.all(
      books.map((item) => {
        return axios.post("http://localhost:8080/books", item, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      })
    );
  });
  it("Visit the bookish", function () {
    cy.visit("http://localhost:3000");
    cy.get('h2[data-test="heading"]').contains("Bookish");
  });

  it("Show a book list", () => {
    cy.visit("http://localhost:3000");
    cy.get('div[data-test="book-list"]').should("exist");

    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);

      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Building microservices",
      ]);
    });
  });
});
