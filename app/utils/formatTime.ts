export const formatTime = (time: number): string => {
  const date = new Date(time * 1000).toISOString().slice(11, 19);
  const [hours, minutes, seconds] = date.split(':');
  return hours === '00' ? `${minutes}:${seconds}` : date;
};
