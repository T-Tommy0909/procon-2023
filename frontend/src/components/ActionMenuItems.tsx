import { FC } from "react";
import styled from "styled-components";
import { PopupMenu } from "./common/PopupMenu/PopupMenu";
import { PopupMenuItem } from "./common/PopupMenu/PopupMenuItem";
import { Action } from "../types/action";

interface Props {
  masonNum: number;
  masonId: number;
  imgPath: string;
  actions: Action[];
  onChange: (value: Action[]) => void;
}

export const ActionMenu: FC<Props> = ({
  masonNum,
  masonId,
  imgPath,
  actions,
  onChange,
}) => {
  return (
    <PopupMenu menuButton={<img src={imgPath} width="40" height="40" />}>
      <PopupMenuItem
        onClick={() =>
          onChange([
            ...Array(masonNum).map((_, i) => {
              return { type: i, dir: i };
            }),
          ])
        }
      >
        リセット
      </PopupMenuItem>
      <PopupMenu menuButton={<div>移動</div>}>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 1,
                    dir: 2,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ↑
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 1,
                    dir: 3,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ↗
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 1,
                    dir: 4,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          →
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 1,
                    dir: 5,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ↘
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 1,
                    dir: 6,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ↓
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 1,
                    dir: 7,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ↙
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 1,
                    dir: 8,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ←
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 1,
                    dir: 1,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ↖
        </PopupMenuItem>
      </PopupMenu>
      <PopupMenu menuButton={<div>建築</div>}>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 2,
                    dir: 2,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ↑
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 2,
                    dir: 4,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          →
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 2,
                    dir: 6,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ↓
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 2,
                    dir: 8,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ←
        </PopupMenuItem>
      </PopupMenu>
      <PopupMenu menuButton={<div>解体</div>}>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 3,
                    dir: 2,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ↑
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 3,
                    dir: 4,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          →
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 3,
                    dir: 6,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ↓
        </PopupMenuItem>
        <PopupMenuItem
          onClick={() => {
            onChange(
              actions.map((action, i) => {
                if (i + 1 === masonId) {
                  return {
                    type: 3,
                    dir: 8,
                  };
                } else {
                  return action;
                }
              })
            );
          }}
        >
          ←
        </PopupMenuItem>
      </PopupMenu>
    </PopupMenu>
  );
};
