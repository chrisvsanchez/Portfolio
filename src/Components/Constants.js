const BREAKPOINTS = {
  laptopMax: 1500,
  tabletMax: 1100,
  mobileMax: 550,
};

const QUERIES = {
  mobileAndDown: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax}px)`,
  // deskstopAndUp: `(max-width: ${BREAKPOINTS.deskstopmax}px)`,
};
export default QUERIES;
