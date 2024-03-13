#  local types are considered exported in `.d.ts` files unlike local types in `.ts` files

## Expected

- local types are not removed from emitted `.d.ts` files based on `.ts` files
- local types cannot be referenced in `.d.ts` files (neither manually nor automatically by TypeScripts type inference)
