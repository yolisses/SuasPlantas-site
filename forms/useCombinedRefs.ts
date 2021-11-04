import { useEffect, useRef } from "react";

// first, define a helper for combining refs
export function useCombinedRefs(...refs) {
    const targetRef = useRef();
  
    useEffect(() => {
      refs.forEach((ref) => {
        if (!ref) return;
  
        if (typeof ref === "function") {
          ref(targetRef.current);
        } else {
          ref.current = targetRef.current;
        }
      });
    }, [refs]);
  
    return targetRef;
  }