import axios from "axios";

const bearer = "Bearer " + `${process.env.TOKEN}`;
const url = `${process.env.IP_SOURCE}/api/v1/`;

const getTAF = async (icao, type) => {
  const { data } = await axios.get(`${url}${type}/${icao}`, {
    headers: {
      Authorization: bearer,
    },
  });
  return data;
};

export { getTAF };
