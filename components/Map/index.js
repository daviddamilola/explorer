import React from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 9.082,
  latitude: 8.6753,
  zoom: 5,
  pitch: 0,
  bearing: 0,
};

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
    >
      <StaticMap
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      />
    </DeckGL>
  );
}

export default MapExplorer;
