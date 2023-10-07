import { ActionPlan } from "../../../types/actionPlan";
import { requestPost } from "../../../utils/axios";

export const postActionPlan = async (
  id: string,
  plan: ActionPlan
): Promise<void> => {
  await requestPost(
    `http://localhost:8000/matches/${id}?token=${process.env.REACT_APP_AUTH_TOKEN}`,
    plan
  );
};
