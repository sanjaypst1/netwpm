import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const caseStudies = readFileSync(new URL("../data/case-studies.ts", import.meta.url), "utf8");
const metrics = readFileSync(new URL("../data/metrics.ts", import.meta.url), "utf8");
const alignment = readFileSync(new URL("../data/role-alignment.ts", import.meta.url), "utf8");

const slugs = [
  "nab-data-platform",
  "ubs-wealth-insights",
  "bofa-digital-banking",
  "daimler-customer-360",
  "merck-regulated-data",
];

test("all required case-study slugs exist", () => {
  for (const slug of slugs) {
    assert.match(caseStudies, new RegExp(`slug: "${slug}"`));
  }
});

test("UBS metrics are not assigned to NAB", () => {
  const nabBlock = caseStudies.split('id: "ubs"')[0];
  assert.doesNotMatch(nabBlock, /30% improvement in onboarding efficiency/);
  assert.doesNotMatch(nabBlock, /22% reduction in service demand/);
});

test("confirmed metrics include CV figures only once per employer context", () => {
  assert.match(metrics, /id: "ubs-onboarding"/);
  assert.match(metrics, /id: "daimler-approval"/);
  assert.match(metrics, /id: "merck-availability"/);
  assert.doesNotMatch(metrics, /Snowflake expert/);
});

test("role alignment does not invent a Data Engineer history", () => {
  assert.match(alignment, /does not show a Data Engineer/);
});

test("no fabricated match score", () => {
  assert.doesNotMatch(alignment, /%\s*match/i);
});

test("named products exist for each employer", () => {
  const products = readFileSync(new URL("../data/owned-products.ts", import.meta.url), "utf8");
  assert.match(products, /NAB Classic Banking account/);
  assert.match(products, /NAB Visa Debit card/);
  assert.match(products, /Wealth Client Onboarding and Servicing Intelligence/);
  assert.match(products, /Digital Banking Transaction Intelligence and Financial Insights/);
  assert.match(products, /Customer 360 and Lead-to-Finance Journey Intelligence/);
  assert.match(products, /Mobile Sales Force Effectiveness and Field Insights Product/);
});
