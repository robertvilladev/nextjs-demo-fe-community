export const parseDuration = (duration: string) => {
  const minutes = Math.floor(parseInt(duration) / 60000);
  const seconds = ((parseInt(duration) % 60000) / 1000).toFixed(0);
  return `${minutes}:${parseInt(seconds) < 10 ? "0" : ""}${seconds}`;
};
