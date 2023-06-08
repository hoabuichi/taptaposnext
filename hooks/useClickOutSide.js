import { useState } from "react";
import { useEffect } from "react";

export default function useClickOutside(ref) {

    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsFocused(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return [isFocused, setIsFocused]
  }