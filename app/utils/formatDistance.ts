function convertKilometersToMiles(kilometers: number): number {
  return kilometers * 0.621371;
}

export function formatDistance(distance: number): string {
  if (distance === 0) {
    return 'N/A';
  }
  const distanceInKm = distance / 1000;
  const distanceInMiles = convertKilometersToMiles(distanceInKm);
  const isImperial = navigator.language === 'en-US' || navigator.language === 'en-GB';
  return isImperial ? `${distanceInMiles.toFixed(2)} mi` : `${distanceInKm.toFixed(2)} km`;
}
