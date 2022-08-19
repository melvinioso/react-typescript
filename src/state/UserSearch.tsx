import { useState } from 'react';

const users = [
  { name: 'Matt', age: 41 },
  { name: 'Jennifer', age: 43 },
  { name: 'Dash', age: 5 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
          {user && user.name}
          <br />
          {user && user.age}
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
