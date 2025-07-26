// src/hooks/useSectionRefs.js
import { useRef } from "react";

export default function useSectionRefs(sectionNames = []) {
  const refs = Object.fromEntries(sectionNames.map(name => [name, useRef(null)]));

  const scrollTo = (section) => {
    refs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { refs, scrollTo };
}
