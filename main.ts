// The Internet in One Word — make.fun entry (u-ronigrv-the-internet-in-one-word-e388f33b)
// Writes exactly one word describing the whole internet to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Unmoderated";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD + "\n", "utf8");

console.log(`wrote ${outPath}: ${WORD}`);
