// The Internet in One Word — make.fun entry (u-ronigrv-the-internet-in-one-word-e388f33b)
// Writes exactly one word describing the whole internet to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Unmoderated";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD + "\n", "utf8");

// Read-back validation: the file on disk must hold exactly the word plus a
// single trailing newline, and the word itself must contain no whitespace.
const written = readFileSync(outPath, "utf8");
if (written !== WORD + "\n") {
  console.error(`validation failed: entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(WORD + "\n")}`);
  process.exit(1);
}
if (/\s/.test(WORD)) {
  console.error("validation failed: the entry must be exactly one word with no whitespace inside it");
  process.exit(1);
}

console.log(`wrote ${outPath}: ${WORD} (validated)`);
