import Props from "./GitHubUserSummary";

export function UserLookup() {
  return (
    <div className="UserLookup">
      <form>
        <h1>NAME LOGIN</h1>
        <p>IMAGE</p>
        <a href="#">View their GitHub Homepage</a>
      </form>
    </div>
  );
}

export default UserLookup;

// <div className="UserLookup">
// <h1>{name}{login}</h1>
// <img src={avatar_url}/>
// <a href={html_url}>View their GitHub Homepage</a>
// </div>


