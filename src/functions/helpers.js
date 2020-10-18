export const isEmptyObject = (obj) => {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
};

export const capitalizeText = (data) => {
  return data.charAt(0).toUpperCase() + data.slice(1);
};