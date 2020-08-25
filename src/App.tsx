import * as React from "react";
import "./styles.css";

interface IButtonProps {
  value: boolean;
}

const Button = (props: IButtonProps) => {
  const onClick = React.useCallback(() => {
    // Props will always change so they need to be part of the callback
    if (props.value === true) {
      console.log("props");
    }
  }, [props.value]);

  return <button onClick={onClick}>Button Component</button>;
};

export default function App() {
  // State will always change so they need to be part of the callback
  const [value, setValue] = React.useState(10);

  // Internal State doesn't change si it doesn't need to be added to the callback
  const { current: internalState } = React.useRef({
    value: 10
  });

  const callback = React.useCallback(() => {
    if (internalState.value === 11) {
      console.log("internalState");
    }
    if (value === 11) {
      console.log("state");
    }
  }, []);

  React.useEffect(() => {
    internalState.value = 11;
    setValue(11);
  }, []);

  return (
    <div className="App">
      <Button value={false} />
      <button onClick={callback}>Press Me</button>
    </div>
  );
}
