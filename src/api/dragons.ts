import axios from "axios";

// https://docs.spacexdata.com/#a9129d6a-1bab-42a1-af1b-2b1064016f9d
export const getDragon = async (request) => {
  const { data } = await axios.request({
    url: `https://api.spacexdata.com/v3/dragons/${request.id}`,
    method: "GET",
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
