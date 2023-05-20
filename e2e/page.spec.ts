import { test, expect } from "@playwright/test";

test("has heading", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("heading")).toHaveText(
    /Hello delectus aut autem/
  );
});

test("click btn 4 time", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "click me" }).click();
  await page.getByRole("button", { name: "click me" }).click();
  await page.getByRole("button", { name: "click me" }).click();
  await page.getByRole("button", { name: "click me" }).click();
  await expect(page.getByRole("paragraph")).toHaveText(/count -> 4/);
});
