import React, { useEffect, useState } from "react";

import { SecondComponentProps } from "../../contract/src/props";
import { Button } from "./button";
import styles from "./index.module.css";

const SecondComponent: React.FC<SecondComponentProps> = ({
  name,
  age,
  onCounterChange,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => onCounterChange?.(value), [value, onCounterChange]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Hello {name}, {age} years old! 🎉
      </h1>

      <div className={styles.descriptionContainer}>
        <p>
          I&apos;m a{" "}
          <a
            href="https://tiny-frontend.github.io"
            target="_blank"
            rel="noreferrer"
          >
            tiny frontend
          </a>{" "}
          🐰. I&apos;m another regular React component, but my implementation
          was loaded at runtime again!
        </p>
        <p>
          You pressed the button <strong>{value} times</strong>!
        </p>
      </div>

      <Button onClick={() => setValue((value) => value + 1)}>Click me</Button>
    </div>
  );
};

export default SecondComponent;
