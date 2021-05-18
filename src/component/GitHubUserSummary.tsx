import { useEffect, useState } from "react";
import { fetchUserProfile } from "../service/GithubApiService";
import { GithubResponse } from "../model/github-model";
import { UserLookup } from "./UserLookup";
import { Repository } from "./Repository";
import "./GitHubUserSummary.css";

export interface Props {
  username: GithubResponse;
}

function GitHubUserSummary() {
  const [selectedUsername, setSelectedUsername] = useState("anthonyabrignani");

  const [repo, setNewRepo] = useState<GithubResponse[]>([]);

  useEffect(() => {
    fetchUserProfile(selectedUsername).then((data) => {
      setSelectedUsername(data.login);
    });
  }, [selectedUsername]);

  return (
    <div className="GitHubUserSummary">
      <header>
        <p>Enter a GitHub username:</p>
        <input
          type="text"
          value={selectedUsername}
          onChange={(e) => setSelectedUsername(e.target.value)}
        />
        <button>
          Show User
        </button>
      </header>
      <div>
        <UserLookup />
      </div>
      <div>
        {repo.map((repo) => (
          <Repository repository={repo} />
        ))}
      </div>
    </div>
  );
}

export default GitHubUserSummary;
