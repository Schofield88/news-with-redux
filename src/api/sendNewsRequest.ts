import { NewsResponse } from "./newsTypes";

const sendNewsRequest = (): Promise<NewsResponse> => {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=gb&apiKey=68b332f4f93141699c8ced0b0a46df84`
  ).then(async (newsResponse) => {
    if (!newsResponse.ok) {
      return Promise.reject(new Error(await newsResponse.text()));
    }

    return newsResponse.json();
  });
};

export { sendNewsRequest };
