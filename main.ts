import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune in a pot: a kind stranger will water you soon.
const LINE =
  "A kind stranger will water you soon. Until then, keep reaching for the window — you are taller than you think.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
