import { forwardRef } from "react";
import styles from "./Circle.module.css";

type CircleProps = {
  style: any;
  className: any;
}

const Circle = forwardRef(function Button(
  {className, ...props}: CircleProps,
  ref: React.ForwardedRef<any>
) {
  return <div className={`${styles.circle} ${className}`} {...props}></div>;
});

export default Circle;
