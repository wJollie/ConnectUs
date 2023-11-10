
// dateFormat.js
const addZero = (number) => (number < 10 ? `0${number}` : number);

const dateFormat = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export default dateFormat;