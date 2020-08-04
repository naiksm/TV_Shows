import httpClient from "@/services/common/http-client/http-client.js";

const fetchShowList = () => {
  return httpClient.get("/shows").then(res => res.data);
};

const fetchShowDetails = (value) => {
  return httpClient
    .get("/shows/" + value)
    .then(res => res.data);
};

const backToList = () => {
  return httpClient.get("/shows").then(res => res.headers.link);
};

const fetchSearchResults = (value) => {
  return httpClient
    .get("/search/shows?q=" + value)
    .then(res => res.data);
};

export {
  fetchShowList,
  fetchShowDetails,
  backToList,
  fetchSearchResults
};
