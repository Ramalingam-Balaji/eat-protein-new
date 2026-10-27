
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    const currentPath = location.pathname;
    const target =
      currentPath === "/" ? location.state?.scrollTo : null;

    const pathChanged = previousPath.current !== currentPath;
    previousPath.current = currentPath;

    // If a section was requested, wait for Home to render.
    if (target) {
      let frame1;
      let frame2;

      const timeout = window.setTimeout(() => {
        frame1 = window.requestAnimationFrame(() => {
          frame2 = window.requestAnimationFrame(() => {
            const section = document.getElementById(target);

            if (section) {
              const header = document.querySelector("header");
              const headerHeight =
                header?.getBoundingClientRect().height ?? 0;

              const sectionTop =
                window.scrollY +
                section.getBoundingClientRect().top -
                headerHeight;

              window.scrollTo({
                top: Math.max(0, sectionTop),
                behavior: "smooth",
              });
            } else {
              console.warn(
                `ScrollManager: Section "${target}" was not found.`
              );
            }
          });
        });
      }, 100);

      return () => {
        window.clearTimeout(timeout);

        if (frame1 !== undefined) {
          window.cancelAnimationFrame(frame1);
        }

        if (frame2 !== undefined) {
          window.cancelAnimationFrame(frame2);
        }
      };
    }

    // For normal page navigation, start at the top.
    if (pathChanged) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location.pathname, location.state]);

  return null;
}



// import { useLayoutEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function ScrollManager() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useLayoutEffect(() => {
//     const target =
//       location.pathname === "/"
//         ? location.state?.scrollTo
//         : null;

//     // Normal page navigation starts at the top.
//     if (!target) {
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "auto",
//       });
//       return;
//     }

//     // Wait for Home to render before locating the section.
//     const frame1 = requestAnimationFrame(() => {
//       const frame2 = requestAnimationFrame(() => {
//         const section = document.getElementById(target);

//         if (section) {
//           const header = document.querySelector("header");
//           const headerHeight =
//             header?.getBoundingClientRect().height ?? 0;

//           const sectionTop =
//             window.scrollY +
//             section.getBoundingClientRect().top -
//             headerHeight;

//           window.scrollTo({
//             top: Math.max(0, sectionTop),
//             left: 0,
//             behavior: "auto",
//           });
//         } else {
//           console.warn(
//             `ScrollManager: Section "${target}" was not found.`
//           );
//         }

//         // Clear the one-time section request.
//         navigate("/", {
//           replace: true,
//           state: {},
//         });
//       });

//       // Cleanup for the nested animation frame.
//       return () => cancelAnimationFrame(frame2);
//     });

//     return () => cancelAnimationFrame(frame1);
//   }, [location.key]);

//   return null;
// }
