export const commanAnimate = {
  section: {
    initial: { opacity: 0, y: 60 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    viewport: { once: true, amount: 0.2 },
  },

  heading: {
    initial: { opacity: 0, y: -20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
    },
  },

  text: {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.5 },
    },
  },
  subtext: {
    initial: { opacity: 0, x: -60 },
    whileInView: {
      opacity: 1,
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },

  slider: {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.5 },
    },
  },
  image: {
    initial: { opacity: 0, scale: 0.9, y: 40 },
    whileInView: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    whileHover: {
      scale: 1.05,
      filter: "brightness(110%)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    viewport: { once: true, amount: 0.2 }, // 👈 triggers when visible
  },
  card: {
    initial: { opacity: 0, y: 60, scale: 0.95 },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    whileHover: {
      scale: 1.05,
      y: -5,
      filter: "brightness(110%)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    viewport: { once: true, amount: 0.2 },
  },
};
