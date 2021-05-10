import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

function useRequestDelay(delayTime = 1000, initialData = []) {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        //throw "Had Error."
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(initialData);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  function updateRecord(recordUpdated) {
    const newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    async function delayFunction() {
      try {
        await delay(delayTime);
        setData(newRecords);
      } catch (error) {
        console.log("error thrown inside delayFunction", error);
      }
    }
    delayFunction();
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord,
  };
}

export default useRequestDelay;
