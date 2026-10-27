
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "instant",
//     });
//   }, [pathname]);

//   return null;
// }



import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTo;

    // Navigate to the requested Home section.
    if (location.pathname === "/" && target) {
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
                `ScrollToTop: Section "${target}" was not found.`
              );
            }

            // Clear the section request after handling it.
            navigate("/", {
              replace: true,
              state: {},
            });
          });
        });
      }, 150);

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

    // For ordinary page navigation, start at the top.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname, location.state, navigate]);

  return null;
}
