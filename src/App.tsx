import { useState } from "react";

import { Container } from "components/Container";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { extractLocalUser } from "utils/extract";
import { isGithubUser } from "utils/typeguards";

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [ user, setUser ] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (name: string) => {
    const url = BASE_URL + name;

    const resp = await fetch(url);
    const result = await resp.json() as GithubUser | GithubError;

    if (isGithubUser(result)) {
      setUser(extractLocalUser(result));
    } else {
      setUser(null);
    }
  }

  return (
    <Container>
      <TheHeader />
      <Search isError={!user} onSubmit={fetchUser} />
      {user && (
        <UserCard {...user} />
      )}
    </Container>
  );
}

export default App;
