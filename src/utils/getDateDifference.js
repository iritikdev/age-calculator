const getFormatedStringFromDays = (numberOfDays) => {
  const years = Math.floor(numberOfDays / 365);
  const months = Math.floor((numberOfDays % 365) / 30);
  const days = Math.floor((numberOfDays % 365) % 30);

  return { years, months, days };
};

const getDateDifference = (date) => {
  const date1 = new Date();
  const date2 = new Date(date.year, date.month - 1, date.day);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return getFormatedStringFromDays(diffDays);
};

export default getDateDifference;
