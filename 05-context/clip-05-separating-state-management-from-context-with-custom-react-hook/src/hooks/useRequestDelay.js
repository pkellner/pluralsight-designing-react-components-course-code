import { useEffect, useState } from "react";

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
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(initialData);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  function updateRecord(recordUpdated, doneCallback) {
    const originalRecords = [...data];
    const newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    async function delayFunction() {
      try {
        setData(newRecords);
        await delay(delayTime);
        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error thrown inside delayFunction", error);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
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
