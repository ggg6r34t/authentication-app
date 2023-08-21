import axios from "axios";
import { AppDispatch } from "../store";
import { userActions } from "../slices/user";
import { BASE_URL } from "../../api/api";

export function fetchOder(userId: string) {
  const orderUrl = `${BASE_URL}/account/${userId}`;
  return async (dispatch: AppDispatch) => {
    const response = await axios(orderUrl);
    const order = await response.data;
    dispatch(userActions.setUserData(order));
  };
}
