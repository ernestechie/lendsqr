export const truncate = (input: string) => {
  if (input.length > 10) {
    return input.slice(0, 10) + '...';
  } else {
    return input;
  }
};

export const parseDate = (date: string) => {
  return `${new Date(date).toLocaleDateString('default', {
    month: 'short',
  })} ${new Date(date).getDate()}, ${new Date(date).getUTCFullYear()} ${
    new Date(date).getHours() < 10 ? '0' : ''
  }${new Date(date).getHours()}:${
    new Date(date).getMinutes() < 10 ? '0' : ''
  }${new Date(date).getMinutes()} ${
    new Date(date).getHours() > 0 && new Date(date).getHours() < 12
      ? 'AM'
      : 'PM'
  }`;
};
