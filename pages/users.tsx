import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        {loading && <p>Loading users...</p>}
        {!loading && users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </>
  );
}
