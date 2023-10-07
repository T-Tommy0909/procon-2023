export const checkYourTurn = (myFirst: boolean, nowTurn: number) => {
  if (
    (myFirst && (nowTurn + 1) % 2 === 0) ||
    (myFirst && nowTurn === 0) ||
    (!myFirst && (nowTurn + 1) % 2 === 1)
  ) {
    return true;
  } else {
    return false;
  }
};
