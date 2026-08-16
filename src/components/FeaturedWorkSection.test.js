import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FeaturedWorkSection from "./FeaturedWorkSection";
import WorkData from "../data/work";

function renderSection() {
  return render(
    <MemoryRouter>
      <FeaturedWorkSection />
    </MemoryRouter>
  );
}

test("shows only the first three work items by default", () => {
  renderSection();

  WorkData.work.slice(0, 3).forEach((work) => {
    expect(screen.getByText(work.title)).toBeInTheDocument();
  });
  WorkData.work.slice(3).forEach((work) => {
    expect(screen.queryByText(work.title)).not.toBeInTheDocument();
  });
});

test("toggles the full work list with show more / show less", () => {
  renderSection();

  fireEvent.click(screen.getByText("Show More"));
  WorkData.work.forEach((work) => {
    expect(screen.getByText(work.title)).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText("Show Less"));
  WorkData.work.slice(3).forEach((work) => {
    expect(screen.queryByText(work.title)).not.toBeInTheDocument();
  });
});
