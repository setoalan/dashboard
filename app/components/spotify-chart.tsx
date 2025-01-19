import Image from 'next/image';
import { fetchSpotifyData } from '@/app/lib/spotify-data';
import type { SpotifyArtist } from '@/app/types/spotify';

export default async function SpotifyChart() {
  const spotifyData = await fetchSpotifyData();

  return (
    <div className="flex-1">
      <div className="prose lg:prose-lg">
        <h2>Spotify</h2>
      </div>
      <table className="table">
        <thead>
          <tr className="lg:prose-lg">
            <th>Artist</th>
            <th className="text-right">Followers</th>
            <th className="text-right">Popularity</th>
            <th className="text-right">Listen on Spotify</th>
          </tr>
        </thead>
        <tbody>
          {spotifyData.items.map((artist: SpotifyArtist) => {
            const { external_urls, followers, genres, id, images, name, popularity } = artist;

            return (
              <tr key={id}>
                <td>
                  <div className="flex gap-3">
                    <div className="mask mask-hexagon-2 flex h-12 w-12 justify-center">
                      <Image className="fill-white" src={`${images[2].url}`} alt={name} width={42} height={42} />
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                      <div className="onameacity-50 text-sm">{genres.join(', ')}</div>
                    </div>
                  </div>
                </td>
                <td className="text-right">{new Intl.NumberFormat().format(followers.total)}</td>
                <th className="text-right">{popularity}/100</th>
                <td className="text-right">
                  <a href={external_urls.spotify} target="blank">
                    <Image
                      className="mx-auto block"
                      src="/icons/spotify/spotify-logo.png"
                      alt={name}
                      width={42}
                      height={42}
                    />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
