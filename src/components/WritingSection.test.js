import React from "react";
import { render, screen } from "@testing-library/react";
import WritingSection from "./WritingSection";
import WritingData from "../data/writing";

test("renders every post from the writing data", () => {
  render(<WritingSection />);

  WritingData.posts.forEach((post) => {
    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.date)).toBeInTheDocument();
  });
});

test("opens post links in a new tab safely", () => {
  render(<WritingSection />);

  screen.getAllByText("Read More").forEach((link) => {
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});
