export const shouldSendTurn = (myfirst: boolean, turn: number) => {
  if ((myfirst && turn % 2 === 1) || (!myfirst && turn % 2 === 0)) {
    return turn + 2;
  } else {
    return turn + 1;
  }
};
