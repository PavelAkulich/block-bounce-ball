import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./App.module.css";
import Block from "./components/Block/Block";
import Button from "./components/Button/Button";
import Circle from "./components/Circle/Circle";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [styl, setStyl] = useState<any>({});
  const blocMoveRef = useRef(null);
  const blocStaticRef = useRef(null);
  const handelButtonClick = () => {
    console.log(blocMoveRef.current);
    const current = blocMoveRef.current
      ? (blocMoveRef.current as HTMLElement)
      : null;
    console.log(current?.offsetTop);
  };
  const current = blocMoveRef.current
    ? (blocMoveRef.current as HTMLElement)
    : null;
  const currentPosition = useMemo(
    () => (current?.offsetTop || 0) + 25,
    [current?.offsetTop]
  );

  const currentStatic = blocStaticRef.current
    ? (blocStaticRef.current as HTMLElement)
    : null;

  useEffect(() => {
    if (isClicked) {
      setStyl({
        top: currentPosition,
        left: 25,
        transition: "top 2s linear, left 2s linear",
        opacity: 1,
      });
      setTimeout(() => {
        setStyl({
          top: (currentStatic?.offsetTop || 0) + 25,
          left: (currentStatic?.offsetLeft || 0) + 25,
          transition: "top 2s linear, left 2s linear",
          opacity: 1,
        });
      }, 0);
      return;
    }

    setStyl({
      opacity: 0,
    });
  }, [isClicked, current, currentStatic, currentPosition]);

  return (
    <div className={styles.app}>
      <div className={styles.mainField}>
        <Block ref={blocMoveRef} isMovable id="1" />
        <Circle style={styl} className={isClicked ? styles.animate : ""} />
        <Block ref={blocStaticRef} isMovable={false} id="2" />
      </div>
      <Button
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        handleClick={handelButtonClick}
      />
    </div>
  );
}

export default App;
