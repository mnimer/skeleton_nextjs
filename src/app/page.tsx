export default function Page() {
  return (
    <main className="flex flex-col gap-3">
      <h1>Splash / Landing Page</h1>
      <a href="/auth">sign in</a>
      <a href="/dashboard">secured dashboard</a>
    </main>
  );
}