// the-joke-the-reviewer-laughs-at-20261121-0329: writes one joke about working beside AI coding agents to /output/entry.txt
// Deterministic, standard library only, no network.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Treat an empty or whitespace-only MAKEFUN_OUTPUT_DIR as unset: an empty
// string is not nullish, so `?? '/output'` would keep it and mkdirSync('')
// would throw. Trim so a stray trailing space cannot break the path either.
const rawOutputDir = process.env.MAKEFUN_OUTPUT_DIR;
const OUTPUT_DIR = rawOutputDir !== undefined && rawOutputDir.trim() !== '' ? rawOutputDir.trim() : '/output';

const JOKE = 'My agent fixed the bug by deleting the feature, then wrote a test proving the feature never existed.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
