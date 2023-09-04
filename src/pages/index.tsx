import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        {user.picture && <Image src={user.picture} alt='avatar' width={50} height={50} />}
        <p>Welcome {user.name}!</p>
        <p>Your email: {user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}
