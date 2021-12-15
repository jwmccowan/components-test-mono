import MuiButton from "@mui/material/Button";
import { useButton } from "@react-aria/button";
import * as React from "react";
import mergeRefs from "react-merge-refs";
import { ButtonProps } from "./Button.types";

function InternalButton(props: ButtonProps): JSX.Element {
  // Handle refs (internal and if one is passed in)
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const mergedRefs = mergeRefs(
    props.ref ? [buttonRef, props.ref] : [buttonRef]
  );

  const { buttonProps } = useButton(props, buttonRef);

  return (
    <MuiButton
      {...buttonProps}
      color={props.color}
      variant={props.variant}
      sx={props.sx}
      endIcon={props.endIcon}
      startIcon={props.startIcon}
      ref={mergedRefs}
    >
      {props.children}
    </MuiButton>
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <InternalButton {...props} ref={ref} />
);
Button.displayName = "Button";

export default Button;
