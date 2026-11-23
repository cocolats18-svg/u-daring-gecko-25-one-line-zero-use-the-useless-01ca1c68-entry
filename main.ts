// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single original one-liner about a useless superpower to /output/entry.txt.
// Node 22, standard library only, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const SUPERPOWER_LINE =
  "I can see exactly two seconds into the future \u2014 just enough time to watch myself make every bad decision twice.";

const entry = SUPERPOWER_LINE;

// The gate requires 1-200 characters of UTF-8 text, not only whitespace,
// and the judge reads exactly one line.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (!/\S/.test(entry)) {
  throw new Error("entry must not be only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outputDir, { recursive: true });
// Write exactly the line, with no trailing newline, so the file's
// character count is the line's character count.
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
