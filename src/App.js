import React from "react";
import axios from "axios";
import { TextField } from "./components/TextField";

function App() {
  const [data, setData] = React.useState();
  const [matchId, setMatchId] = React.useState();
  const [actions, setActions] = React.useState();
  const [turnSeconds, setTurnSecons] = React.useState();

  const url = `http://localhost:8080/matches/${matchId}`;
  const headers = {
    "procon-token": "token1",
  };

  const Ramdom = () => {
    const type = [1, 2, 3];
    const dir = [1, 2, 3, 4, 5, 6, 7, 8];
    const masons = data.board.mason;
    let actionArray = [];

    for (let i = 0; masons > i; i++) {
      const typeNum = Math.floor(Math.random() * type.length);
      const dirNum = Math.floor(Math.random() * dir.length);

      actionArray.push({ type: type[typeNum], dir: dir[dirNum] });
    }

    setActions(actionArray);
  };

  const GetData = () => {
    axios.get(url, { headers: headers }).then((res) => {
      setData(res.data);
    });
  };

  const PostData = () => {
    Ramdom();
    const postData = {
      turn: data.turn,
      actions: actions,
    };

    axios.post(url, postData, { headers: headers });
  };

  return (
    <div>
      <div>チーム牛丼</div>
      <div>{url}</div>
      <TextField
        id="turn_seconds"
        type="number"
        value={turnSeconds}
        onChange={setTurnSecons}
        placeholder="制限時間入力してください"
      />
      <TextField
        id="match_id"
        type="number"
        value={matchId}
        onChange={setMatchId}
        placeholder="試合IDを入力してください"
      />
      {matchId && <button onClick={GetData}>データを取得</button>}
      {matchId && <button onClick={Ramdom}>乱数生成</button>}
      {matchId && <button onClick={PostData}>データを送信</button>}
      <div>{JSON.stringify(data)}</div>
      {actions &&
        actions.map((actions, i) => (
          <div>
            移動先{i + 1} {actions.type}:{actions.dir}
          </div>
        ))}
    </div>
  );
}

export default App;
