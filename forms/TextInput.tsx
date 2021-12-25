import {
  FormEvent, forwardRef, HTMLProps, ReactNode, useEffect, useRef,
} from 'react';
import { FieldBox } from './FieldBox';

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  mask?: RegExp;
  label: string;
  error?: string;
  optional?: boolean;
  multiple?: boolean;
  leftChild?: ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, fRef) => {
    const {
      mask,
      error,
      label,
      onChange,
      optional,
      multiple,
      leftChild,
      ...rest
    } = props;

    const ref = useRef<HTMLInputElement>();

    function handleBeforeInput(e: FormEvent<HTMLInputElement>) {
      if (mask && !mask.test((e as any).data)) {
        e.preventDefault();
      }
    }

    function handleRef(v: any) {
      ref.current = v;
      if (fRef) (fRef as (v: any) => {})(v);
    }

    function resize() {
      if (multiple) {
        ref.current!.style!.height = '0px';
        ref.current!.style!.height = `${Math.max(ref.current!.scrollHeight, 48)}px`;
      }
    }

    useEffect(resize, []);

    return (
      <FieldBox
        label={label}
        error={error}
        labelClassName="transform translate-y-2 bg-white px-1"
      >
        <div
          className="flex flex-1 self-stretch flex-row border-2 border-gray-300 rounded-lg p-2 focus:border-black focus-within:border-gray-800"
        >
          {leftChild}
          {multiple ? (
            <textarea
              // @ts-ignore
              ref={handleRef}
              // @ts-ignore
              onBeforeInput={handleBeforeInput}
              onChange={resize}
              placeholder={optional ? 'opcional' : undefined}
              className=" self-stretch flex flex-1 outline-none resize-none bg-transparent"
              {...rest}
            />
          ) : (
            <input
              ref={handleRef}
              onBeforeInput={handleBeforeInput}
              placeholder={optional ? 'opcional' : undefined}
              className=" self-stretch flex flex-1 outline-none resize-none bg-transparent"
              {...rest}
            />
          )}
        </div>
      </FieldBox>
    );
  },
);
