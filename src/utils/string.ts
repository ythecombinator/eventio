const trim = (text: string, cut: number) => {
  if (text.length <= cut) {
    return text;
  }
  const result = text.slice(0, cut);
  return `${result}...`;
};

export {trim};
