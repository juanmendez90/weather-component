export default (canceler) => {
  if (canceler) {
    canceler();
  }

  return null;
};
