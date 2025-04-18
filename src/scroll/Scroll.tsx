// import { RefObject, use, useEffect, useRef, useState } from "react";

// type Position = {
//   x: number;
//   y: number;
// };

// const initPosition: Position = { x: 0, y: 0 };

// const useScroll = (ref: RefObject<HTMLElement>): Position => {
//   const [position, setPosition] = useState<Position>(initPosition);

//   useEffect(() => {
//     const { current } = ref;
//     if (current === null) {
//       setPosition(initPosition);
//       return;
//     }

//     const handleScroll = () => {
//       const { scrollTop, scrollLeft } = current;
//       setPosition({ x: scrollLeft, y: scrollTop });
//     };

//     current.addEventListener("scroll", handleScroll);

//     return () => {
//       current.removeEventListener("scroll", handleScroll);
//     };
//   });

//   return position;
// };
