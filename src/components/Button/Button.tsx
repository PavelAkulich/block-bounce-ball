import { Dispatch, forwardRef, SetStateAction, useEffect, useState } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  handleClick: () => void;
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>; 
};

const Button = forwardRef(function Button(
  {handleClick, isClicked, setIsClicked}: ButtonProps,
  ref: React.ForwardedRef<any>
) {
  // const [isClicked, setIsClicked] = useState(false);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (!isClicked) return;
    let timer = window.setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) setIsClicked(false);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isClicked]);

  const click = () => {
    setIsClicked(true);
    handleClick();
    setSeconds(5);
  };

  return (
    // <div className={styles.buttonContainer}>
      <button
        className={styles.button}
        type="button"
        onClick={click}
        disabled={seconds > 0 && isClicked}
      >
        {seconds > 0 && isClicked ? seconds : "START"}
      </button>
    // </div>
  );
});

export default Button;
