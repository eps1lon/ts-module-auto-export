# Inlined types in emission

## Expected

`render()` return value is emitted as `React.ReactNode | React.JSX.Element`:

```ts
export declare class Component extends React.Component<{
  children: React.ReactNode;
}> {
  render(): React.ReactNode | import("react/jsx-runtime").JSX.Element;
}
```

## Actual

```ts
export declare class Component extends React.Component<{
  children: React.ReactNode;
}> {
  render():
    | string
    | number
    | boolean
    | Iterable<React.ReactNode>
    | import("react/jsx-runtime").JSX.Element;
}
```

1. TypeScripts inlines the union members
   This is incorrect since the type may change during React versions. The emitted declaration file should reference the library type when consumed not when published which is especially apparent since that's how we reference it in the input position.
2. TypeScript does not inline all union members
   https://drive.google.com/file/d/1x6J8T21e6cqG6PsZ9JBu-P7WACvtiHHY/view?usp=sharing
