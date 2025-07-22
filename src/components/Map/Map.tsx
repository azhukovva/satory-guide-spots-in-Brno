import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

// Исправление иконок (иначе они не отображаются)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const coffeeShops = [
  { position: [49.1951, 16.6068] as [number, number], text: "Kafec Brno" },
  { position: [49.2001, 16.608] as [number, number], text: "SKØG Urban Hub" },
  {
    position: [49.197, 16.6105] as [number, number],
    text: "Monogram Espresso Bar",
  },
];

const Map: React.FC = () => {
  const position: [number, number] = [49.1951, 16.6068];
  return (
    <MapContainer
      center={position}
      zoom={14}
      style={{ height: "50vh", width: "100%" }}
      scrollWheelZoom={false}
      dragging={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coffeeShops.map((shop, index) => (
        <Marker key={index} position={shop.position}>
          <Popup>{shop.text}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
