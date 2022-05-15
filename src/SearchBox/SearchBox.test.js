import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBox from "./SearchBox";

describe("Search Box", () => {
  it("render input", async () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    const { container, debug } = render(<SearchBox {...props} />);
    const input = container.querySelector('input[type="text"]');
    // console.log(input);
    await userEvent.type(input, "hello");
    expect(props.onSearch).toHaveBeenCalled();
  });

  it("trim empty strings", async () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    const { container } = render(<SearchBox {...props} />);
    const input = container.querySelector('input[type="text"]');
    await userEvent.type(input, "      ");
    expect(props.onSearch).not.toHaveBeenCalled();
  });
});
