import Image from 'next/image';
import { fetchStravaData } from '@/app/lib/strava-data';
import stravaRideIcon from '@/app/assets/strava-ride.svg';
import { formatDistance } from '@/app/utils/formatDistance';
import { formatTime } from '@/app/utils/formatTime';
import type { StravaActivity } from '@/app/types/strava';

export default async function StravaChart() {
  const stravaData = await fetchStravaData();

  return (
    <div className="flex-1">
      <div className="prose lg:prose-lg">
        <h2>Strava</h2>
      </div>
      <table className="table">
        <thead>
          <tr className="lg:prose-lg">
            <th>Activity</th>
            <th className="text-right">Time</th>
            <th className="text-right">Distance</th>
            <th className="text-right">Suffer Score</th>
          </tr>
        </thead>
        <tbody>
          {stravaData.map((activity: StravaActivity) => {
            const { distance, id, moving_time, name, suffer_score, type } = activity;

            return (
              <tr key={id}>
                <td>
                  <div className="flex gap-3">
                    <div className="mask mask-hexagon-2 flex h-12 w-12 justify-center bg-strava">
                      <Image className="fill-white" width={32} height={32} src={stravaRideIcon} alt="" />
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                      <div className="text-sm opacity-50">{type}</div>
                    </div>
                  </div>
                </td>
                <td className="text-right">{formatTime(moving_time)}</td>
                <td className="text-right">{formatDistance(distance)}</td>
                <th className="text-right">{suffer_score}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
