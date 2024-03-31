import AuthForm from '@/components/Authform';
import { auth } from '../api/auth/[...nextauth]/auth';

export default async function Page() {
  const session = await auth();

  return (
    <main className="flex flex-col gap-3">
      <AuthForm session={session} />
    </main>
  );
}