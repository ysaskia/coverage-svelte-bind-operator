import "@testing-library/jest-dom";
import {cleanup, render} from "@testing-library/svelte";
import {expect, describe, afterEach} from "vitest";
import ButtonCoverageValid from "./ButtonCoverageValid.svelte";

afterEach(() => cleanup());

describe("ButtonCoverageValid", () => {
  it("should render", async () => {
    const {findByTestId} = render(ButtonCoverageValid, {
      "data-testid": "button-coverage-valid"
    });

    expect(await findByTestId("button-coverage-valid")).toBeDefined();
  });
});
