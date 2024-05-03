export const NavAnimation = {
  initial: {
    x: "100%",
    transition: {
      duration: 0.5,
      ease: "circOut",
    },
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "circOut",
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.5,
      ease: "circOut",
    },
  },
};

export const Line1Animation = {
  initial: {
    width: "0px",
  },
  animate: {
    width: "48px",
    transition: {
      delay: 0.2,
    },
  },
  exit: {
    width: "0px",
  },
};

export const Line2Animation = {
  initial: {
    width: "0px",
  },
  animate: {
    width: "48px",
    transition: {
      delay: 0.3,
    },
  },
  exit: {
    width: "0px",
  },
};

export const Line3Animation = {
  initial: {
    width: "0px",
  },
  animate: {
    width: "48px",
    transition: {
      delay: 0.4,
    },
  },
  exit: {
    width: "0px",
  },
};
