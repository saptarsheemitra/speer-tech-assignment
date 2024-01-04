
const BASE_URL = "https://cerulean-marlin-wig.cyclic.app";
// const BASE_URL = "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/"
export const fetchData = async () => {
  const url = `${BASE_URL}/activities`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    //Retrying to fetch since it is mentioned in the problem statement that the response might not come from the server in the first call.
    await new Promise((resolve) => setTimeout(resolve, 30000));

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (retryError) {
      return retryError;
    }
  }
};

export const fetchCallDetail = async (id:string) => {
    const url = `${BASE_URL}/activities/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    //Retrying to fetch since it is mentioned in the problem statement that the response might not come from the server in the first call.
    await new Promise((resolve) => setTimeout(resolve, 30000));

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (retryError) {
      return retryError;
    }
  }
}

export const updateCallDetail = async (id:string, value:boolean) => {
    fetch(`${BASE_URL}/activities/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ "is_archived" : value }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
};

export const resetArchiveCalls = async () => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };
  await fetch(
    "https://cerulean-marlin-wig.cyclic.app/reset",
    requestOptions
  ).then((response) => console.log(response));
};
