import StravaChart from '@/app/components/strava-chart';

export default async function Home() {
  return (
    <div className="min-h-screen max-w-none p-6">
      <main>
        <div className="prose lg:prose-lg">
          <h1>Alan&apos;s Dashboard</h1>
        </div>
        <div className="flex">
          <StravaChart />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
