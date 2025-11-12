
export const serviceCardAnimation = {
  initial: { opacity: 0, y: 50, x: 0 },

  whileInView: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },

  whileHover: {
    scale: 1.05,
    filter: "brightness(120%)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },

  viewport: { once: true, amount: 0.2 },

  transition: { duration: 0.4, ease: "easeInOut" },
};
