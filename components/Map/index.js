import React from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";

// Viewport settings
const INITIAL_VIEW_STATE = {
    "width": 1440,
    "height": 579,
    "latitude": 9.008860826770198,
    "longitude": 9.181477756474857,
    "zoom": 5.302494252418037,
    "bearing": 0,
    "pitch": 0,
    "altitude": 1.5,
    "maxZoom": 20,
    "minZoom": 0,
    "maxPitch": 60,
    "minPitch": 0
}

// Data to be used by the LineLayer
const data = [
  { sourcePosition: [9.082, 8.6753], targetPosition: [9.082, 8.6753] },
];

// DeckGL react component
function MapExplorer() {
  const layers = [new LineLayer({ id: "line-layer", data })];
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      onViewStateChange={({ viewState }) => {
      }}
    >
      <StaticMap
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      />
    </DeckGL>
  );
}

export default MapExplorer;
