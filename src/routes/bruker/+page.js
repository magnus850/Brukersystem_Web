export function load({ url }) {
  const brukernavn =
    url.searchParams.get("brukernavn") || "fant ikke brukernavn";
  const tillatelse =
    url.searchParams.get("tillatelse") || "fant ikke tillatelse";
  return { brukernavn, tillatelse };
}
