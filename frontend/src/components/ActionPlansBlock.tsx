import { FC } from "react";
import styled from "styled-components";
import { Action } from "../types/action";

interface Props {
  actions: Action[];
}

export const ActionPlansBlock: FC<Props> = ({ actions }) => {
  const types = ["滞在", "移動", "建築", "解体"];
  const dir = [
    "無方向",
    "左上",
    "上",
    "右上",
    "右",
    "右下",
    "下",
    "左下",
    "左",
  ];
  return (
    <PlanField>
      行動計画:{" "}
      {actions.map((action, i) => {
        return (
          <div>
            {i + 1}: {types[action.type]} {dir[action.dir]}
          </div>
        );
      })}
    </PlanField>
  );
};

const PlanField = styled.div`
  display: flex;
  gap: 20px;
`;
