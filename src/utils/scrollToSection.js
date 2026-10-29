
export default function scrollToSection(target, behavior = "smooth") {
  if (!target) return false;

  const section = document.getElementById(target);

  if (!section) {
    console.warn(`Section not found: ${target}`);
    return false;
  }

  const header = document.querySelector("header");
  const headerHeight = header
    ? header.getBoundingClientRect().height
    : 0;

  // Keep a consistent gap below the navbar
  const spacing = 40;

  const sectionTop =
    window.scrollY +
    section.getBoundingClientRect().top -
    headerHeight -
    spacing;

  window.scrollTo({
    top: Math.max(0, sectionTop),
    behavior,
  });

  return true;
}
