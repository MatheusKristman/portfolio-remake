export const staggerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const fromLeftFromRight = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

export const heroDescription = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.7,
      delay: 0.7,
    },
  },
};

export const heroLink = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.7,
      delay: 1.2,
    },
  },
};

export const heroIllustrationDesktop = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

export const heroTechsAnimation = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
      delay: 1.2,
    },
  },
};

export const aboutSectionAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

export const projectsResumeIllustrationAnimation = {
  initial: {
    scale: "var(--scale-initial)",
    y: "var(--y-initial)",
    x: "var(--x-initial)",
    opacity: "var(--opacity-initial)",
  },
  animate: {
    scale: "var(--scale-animate)",
    y: "var(--y-animate)",
    x: "var(--x-animate)",
    opacity: "var(--opacity-animate)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: "var(--scale-initial)",
    y: "var(--y-initial)",
    x: "var(--x-initial)",
    opacity: "var(--opacity-initial)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const projectResumeInfosAnimation = {
  initial: {
    scale: "var(--scale-initial)",
    y: "var(--y-initial)",
    x: "var(--x-initial)",
    opacity: "var(--opacity-initial)",
  },
  animate: {
    scale: "var(--scale-animate)",
    y: "var(--y-animate)",
    x: "var(--x-animate)",
    opacity: "var(--opacity-animate)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const portfolioSectionAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
