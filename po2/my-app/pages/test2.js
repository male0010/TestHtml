import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://www.imgen.site/imgen2/api_male/subtype.php?q=${searchTerm}`);
    const data = await response.json();
    setUsers(data.items);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Head>
        <title>Github User Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Github User Search</h1>

        <div>
          <input type="text" onChange={handleInputChange} value={searchTerm} />
          <button onClick={handleSearch}>Search</button>
        </div>

        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt={user.login} width={100} />
          </div>
        ))}
      </main>
    </div>
  );
}
