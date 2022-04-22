import "@testing-library/jest-dom";
import {cleanup, render} from "@testing-library/svelte";
import {expect, describe, afterEach} from "vitest";
import ButtonCoverageInvalid from "./ButtonCoverageInvalid.svelte";

afterEach(() => cleanup());

describe("ButtonCoverageInvalid", () => {
  it("should render", async () => {
    const {findByTestId} = render(ButtonCoverageInvalid, {
      "data-testid": "button-coverage-invalid"
    });

    expect(await findByTestId("button-coverage-invalid")).toBeDefined();
  });
});
