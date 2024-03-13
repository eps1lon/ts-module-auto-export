import { Private as DeclarationPrivate } from "./declaration";
import { Private as LibraryPrivate } from "./library";

export const foo: DeclarationPrivate = { foo: "bar" };
export const bar: LibraryPrivate = { foo: "bar" };
