export interface ExampleTinyFrontendProps {
  name: string;
  onCounterChange?: (counter: number) => void;
}

export type SecondComponentProps = {
  age: number;
} & ExampleTinyFrontendProps;
