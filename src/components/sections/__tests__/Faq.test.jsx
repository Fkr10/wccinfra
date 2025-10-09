/**
 * @vitest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Faq from "../Faq";
import { describe, test, expect } from "vitest";

describe("Faq component", () => {
  test("renders FAQ items and toggles by click", async () => {
    render(<Faq />);

    const questions = screen.getAllByRole("button");
    expect(questions.length).toBeGreaterThan(0);

    // first item starts open
    const firstQuestion = questions[0];
    expect(firstQuestion.getAttribute("aria-expanded")).toBe("true");

    // click second question to open it
    const secondQuestion = questions[1];
    await userEvent.click(secondQuestion);
    expect(secondQuestion.getAttribute("aria-expanded")).toBe("true");
    // first should be closed
    expect(firstQuestion.getAttribute("aria-expanded")).toBe("false");
  });

  test("toggles via keyboard (Enter/Space)", async () => {
    render(<Faq />);
    const questions = screen.getAllByRole("button");
    const third = questions[2];
    third.focus();
    await userEvent.keyboard("{Enter}");
    expect(third.getAttribute("aria-expanded")).toBe("true");
    await userEvent.keyboard(" ");
    expect(third.getAttribute("aria-expanded")).toBe("false");
  });
});
