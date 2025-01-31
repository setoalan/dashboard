import LastfmChart from '@/app/components/lastfm-chart';
import SpotifyChart from '@/app/components/spotify-chart';
import StravaChart from '@/app/components/strava-chart';

export default async function Home() {
  return (
    <div className="min-h-screen max-w-none p-6">
      <main>
        <div className="prose lg:prose-lg">
          <h1>Alan&apos;s Dashboard</h1>
        </div>
        <div className="my-4 flex gap-3">
          <LastfmChart />
          <SpotifyChart />
        </div>
        <div className="flex gap-3">
          <StravaChart />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
