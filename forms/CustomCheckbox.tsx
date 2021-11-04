import { forwardRef, HTMLProps, useEffect, useRef, useState } from "react";
import { useCombinedRefs } from "./useCombinedRefs";

interface CustomCheckBoxProps extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
}

// then our component
export const CustomCheckBox = forwardRef(
  (
    { label, onChange, defaultChecked, error, ...rest }: CustomCheckBoxProps,
    forwardedRef
  ) => {
    const [checked, setChecked] = useState(defaultChecked || false);

    const innerRef = useRef(null);
    const combinedRef = useCombinedRefs(forwardedRef, innerRef);

    const setCheckedInput = (checked) => {
      if (innerRef?.current?.checked !== checked) {
        // just emulate an actual click on the input element
        innerRef?.current?.click();
      }
    };

    useEffect(() => {
      setCheckedInput(checked);
      if (onChange) {
        onChange(checked);
      }
    }, [checked]);

    return (
      <div onClick={() => setChecked(!checked)}>
        <input
          style={{ display: "none" }}
          ref={combinedRef}
          type="checkbox"
          defaultChecked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
          {...rest}
        />
        [{checked ? "X" : " "}]{label}
        {error}
      </div>
    );
  }
);
