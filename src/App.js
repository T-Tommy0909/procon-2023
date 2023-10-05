import React from "react";
import axios from "axios";
import styled from "styled-components";
import { TextField } from "./components/TextField";

function App() {
  const [data, setData] = React.useState();
  const [matchId, setMatchId] = React.useState();
  const [typeNum, setTypeNum] = React.useState();
  const [dirNum, setDirNum] = React.useState();

  const url = `http://localhost:8080/matches/${matchId}`;
  let postdata = {
    turn: 30,
    actions: [
      {
        type: 0,
        dir: 0,
      },
      {
        type: 1,
        dir: 2,
      },
    ],
  };
  const headers = {
    "procon-token": "token",
  };

  const Ramdom = () => {
    const type = [1, 2, 3];
    const dir = [1, 2, 3, 4, 5, 6, 7, 8];
    const typeNum = Math.floor(Math.random() * type.length);
    const dirNum = Math.floor(Math.random() * dir.length);

    setTypeNum(type[typeNum]);
    setDirNum(dir[dirNum]);
  };

  const GetData = () => {
    axios.get(url, { headers: headers }).then((res) => {
      setData(JSON.stringify(res.data));
    });
  };

  const PostData = () => {
    axios.post(url, postdata, { headers: headers }).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      <div>チーム牛丼</div>
      <div>{url}</div>
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
      <div>{data}</div>
      {typeNum && dirNum && (
        <div>
          移動先 type:{typeNum} dir:{dirNum}
        </div>
      )}
    </div>
  );
}

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: white;
  color: black;
  &:focus {
    background: #fff;
  }
  &:disabled,
  &:read-only {
    color: gray;
  }
`;

export default App;
