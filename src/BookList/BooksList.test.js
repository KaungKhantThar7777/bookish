import { createTheme, ThemeProvider } from "@material-ui/core";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import BooksList from "./BooksList";

export const theme = createTheme({
  //here you set palette, typography ect...
  palette: {
    text: {
      secondary: "#010101",
    },
  },
});

const AllWrapper = ({ children }) => (
  <MemoryRouter>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </MemoryRouter>
);
describe("BooksList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };
    const { container } = render(<BooksList {...props} />, {
      wrapper: AllWrapper,
    });
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Loading");
  });
  it("error", () => {
    const props = {
      error: true,
    };
    const { container } = render(<BooksList {...props} />, {
      wrapper: AllWrapper,
    });
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
    const { container } = render(<BooksList {...props} />, {
      wrapper: AllWrapper,
    });
    const titles = [...container.querySelectorAll("h2")].map(
      (x) => x.innerHTML
    );
    expect(titles).toEqual(["Atomic habit", "Clean Code"]);
  });
});
