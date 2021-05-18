import { GithubResponse } from "../model/github-model";

const ghCredentials: string =
  process.env.REACT_APP_GITHUB_API_CREDENTIALS || "";
const credentials = btoa(ghCredentials);

export function fetchUserProfile(login: string): Promise<GithubResponse> {
  return fetch(
    `https://api.github.com/users/${encodeURIComponent("anthonyabrignani")}`,
    {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data: GithubResponse) => {
      return data;
    });
}
