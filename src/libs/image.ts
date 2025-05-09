export function upgradePosterUrl(url: string): string {
  return url.replace(/\/s\d+\//, "/s1600/");
}
