export const pageTransitionAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const TextAnimation = {
  initial: {
    y: "-25%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: "25%",
    transition: {
      duration: 0.5,
    },
  },
};
