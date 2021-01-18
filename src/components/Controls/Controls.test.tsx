import React from "react";
import { render } from "@testing-library/react";
import { Controls } from "./index";

describe("<Controls />", () => {
  it("should render Controls component", () => {
    const { container } = render(
      <Controls
        columns={4}
        onChangeColumns={() => {}}
        onChangeRows={() => {}}
        rows={4}
        islands={2}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
