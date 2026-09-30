import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

test("React renders markup through ReactDOMServer", () => {
  const markup = renderToStaticMarkup(
    React.createElement("main", { id: "runtime-check" }, "Application ready"),
  );

  assert.equal(markup, '<main id="runtime-check">Application ready</main>');
});
