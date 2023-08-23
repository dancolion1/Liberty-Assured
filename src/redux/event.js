import { createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../config/apiEndpoint";

const scrollTop = createSlice({
    name: "scrollTop",
    initialState: true,
    reducers: {
        setScrollTop: (state, action) => {
            return action.payload
        }
    }
})

export const { setScrollTop } = scrollTop.actions
export default scrollTop.reducer

export const fetchEvents = () => {
    return async (dispatch) => {
      try {
        const response = await processGetRequest(`${API_ENDPOINTS.EVENTS}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        dispatch(fetchAwardDataSuccess(data.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  };