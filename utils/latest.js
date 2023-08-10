import axios from "axios";

const bearer =
  "Bearer " + `c000561fd431399e706fc6d495606ebd655871a46807171c24c2e3704a46`;
const url = `http://172.19.3.8/api/v1/`;

const getTAF = async (icao, type) => {
  const { data } = await axios.get(`${url}${type}/${icao}`, {
    headers: {
      Authorization: bearer,
    },
  });
  return data;
};

export { getTAF };
