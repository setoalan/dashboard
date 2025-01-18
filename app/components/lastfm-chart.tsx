import Image from 'next/image';
import { fetchLastfmData } from '@/app/lib/lastfm-data';
import type { LastfmArtist } from '@/app/types/lastfm';

export default async function LastfmChart() {
  const lastfmData = await fetchLastfmData();

  return (
    <div className="flex-1">
      <div className="prose lg:prose-lg">
        <h2>Last.fm</h2>
      </div>
      <table className="table">
        <thead>
          <tr className="lg:prose-lg">
            <th>Artist</th>
            <th className="text-right">Playcount</th>
          </tr>
        </thead>
        <tbody>
          {lastfmData.map((artist: LastfmArtist) => {
            const { image, mbid, name, playcount } = artist;

            return (
              <tr key={mbid}>
                <td>
                  <div className="flex gap-3">
                    <div className="mask mask-hexagon-2 flex h-12 w-12 justify-center">
                      <Image
                        className="fill-white"
                        src={`${image[2]['#text']}`}
                        alt={name}
                        width={42}
                        height={42}
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                    </div>
                  </div>
                </td>
                <th className="text-right">{playcount}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
