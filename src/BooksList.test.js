import { render } from "@testing-library/react";
import BooksList from "./BooksList";

describe("BooksList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };
    const { container } = render(<BooksList {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Loading");
  });
  it("error", () => {
    const props = {
      error: true,
    };
    const { container } = render(<BooksList {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Error");
  });
  it("show books data", () => {
    const props = {
      books: [
        {
          name: "Atomic habit",
          id: 1,
        },
        {
          name: "Clean Code",
          id: 2,
        },
      ],
    };
    const { container } = render(<BooksList {...props} />);
    const titles = [...container.querySelectorAll("h2")].map(
      (x) => x.innerHTML
    );
    expect(titles).toEqual(["Atomic habit", "Clean Code"]);
  });
});
