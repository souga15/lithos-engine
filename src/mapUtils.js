/**
 * Utility for map tile layers.
 * Resolves CARTO dark basemap using the ?key= query parameter required by CARTO.
 * Falls back cleanly to Esri Dark Canvas if no key is configured.
 */
export const getDarkTileUrl = () => {
  const key = import.meta.env.VITE_CARTO_API_KEY;
  if (key && key.trim()) {
    return `https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?key=${key.trim()}`;
  }
  return 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}';
};
