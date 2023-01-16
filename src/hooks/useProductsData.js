import { useEffect } from "react";
import { ACTIONS } from "../reducer/appReducer";

const useProductsData = (url, dispatch) => {
  useEffect(() => {
    (
      async function () {
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data });
        } catch (err) {
          dispatch({
            type: ACTIONS.FETCH_ERROR, payload: {
              error: err,
            }
          });
        }
      }
    )()
  }, [url, dispatch]);
}

export default useProductsData;
