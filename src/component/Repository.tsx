import { GithubResponse } from '../model/github-model';

export interface Props {
    repository: GithubResponse;
}

export function Repository({repository}: Props) {

    const name = repository.name;
    const login = repository.login;
    const avatar = repository.avatar_url;
    const url = repository.html_url;

    return (
        <div className="PostInList">
            <h3>{name}</h3>
            <p>{login}</p>
            <p>{avatar}</p>
            <p>{url}</p>
        </div>
    )
}

export default Repository;