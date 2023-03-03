import { FC, forwardRef, ReactNode } from "react";
import styles from "./Block.module.css";

type BlockProps = {
  isMovable: boolean;
  id: string;
  children?: ReactNode;
};

const Block = forwardRef(function Button(
  props: BlockProps,
  ref: React.ForwardedRef<any>
) {
  return (
    <div
      className={`${styles.block} ${
        props.isMovable ? styles.blockCanMove : styles.blockNoMove
      }`}
      ref={ref}
    >
      {props.id}
      {props.children && props.children}
    </div>
  );
});

export default Block;
