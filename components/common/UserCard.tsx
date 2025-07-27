import { UserProps } from '@/interfaces';

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: '#fafafa'
    }}>
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p>
        <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}