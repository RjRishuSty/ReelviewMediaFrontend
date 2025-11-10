export const heroSectionAnimation = {
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  },

  heading: {
    initial: { opacity: 0, y: 80, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  },

  gradientText: {
    initial: { opacity: 0, y: 80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: "easeOut", delay: 0.3 },
    },
  },

  subtext: {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.6 },
    },
  },
  text: {
    initial: { opacity: 0, x: -80 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    viewport: { once: true, amount: 0.2 },
  },
  video: {
    initial: { opacity: 0, x: 80 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
    },
    viewport: { once: true, amount: 0.2 },
  },
};
