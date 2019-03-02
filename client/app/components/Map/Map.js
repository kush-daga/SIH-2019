import React from "react";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  GeoJSON
} from "react-leaflet";
// import leaflet from "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import SidePanel from "../SidePanel";
const data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "01",
      properties: { name: "Alabama", density: 94.65 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-87.359296, 35.00118],
            [-85.606675, 34.984749],
            [-85.431413, 34.124869],
            [-85.184951, 32.859696],
            [-85.069935, 32.580372],
            [-84.960397, 32.421541],
            [-85.004212, 32.322956],
            [-84.889196, 32.262709],
            [-85.058981, 32.13674],
            [-85.053504, 32.01077],
            [-85.141136, 31.840985],
            [-85.042551, 31.539753],
            [-85.113751, 31.27686],
            [-85.004212, 31.003013],
            [-85.497137, 30.997536],
            [-87.600282, 30.997536],
            [-87.633143, 30.86609],
            [-87.408589, 30.674397],
            [-87.446927, 30.510088],
            [-87.37025, 30.427934],
            [-87.518128, 30.280057],
            [-87.655051, 30.247195],
            [-87.90699, 30.411504],
            [-87.934375, 30.657966],
            [-88.011052, 30.685351],
            [-88.10416, 30.499135],
            [-88.137022, 30.318396],
            [-88.394438, 30.367688],
            [-88.471115, 31.895754],
            [-88.241084, 33.796253],
            [-88.098683, 34.891641],
            [-88.202745, 34.995703],
            [-87.359296, 35.00118]
          ]
        ]
      }
    }
  ]
};
const markers = [
  {
    name: " Karmalichak ",
    latlng: [25.609575, 85.1238191]
  },
  {
    name: " Pahari ",
    latlng: [25.609575, 85.1238191]
  },
  {
    name: " Saidpur STP Old ",
    latlng: [25.609575, 85.1238191]
  },
  {
    name: " Saidpur STP ",
    latlng: [25.609575, 85.1238191]
  },
  {
    name: " Okhla Phase-I ",
    latlng: [28.5246, 77.2793]
  },
  {
    name: " Keshopur Nilothi-I ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Keshopur Nilothi-II ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Okhla Phase-II ",
    latlng: [28.5246, 77.2793]
  },
  {
    name: " Vasant Kunj-I ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " STP Kondli phase-I ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " STP Kondli Old Phase-II ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Rithla Old ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Keshopur Nilothi-III ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Okhla Phase-III ",
    latlng: [28.5246, 77.2793]
  },
  { name: " Okhla Pase-IV ", latlng: [28.5246, 77.2793] },
  {
    name: " Vasant Kunj-II ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Vasant Kunj- III ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Dr. Sen Nursing Home Nalla ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Delhi Gate Nalla ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Yamunavihar Phase-I ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " coronation Pillar-II ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " STP Papankalla ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " STP Kondli Phase-III ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Okhla Phase-V ",
    latlng: [28.5246, 77.2793]
  },
  {
    name: " Narela-I ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " STP Nazafgarh ",
    latlng: [28.609013, 76.985453]
  },
  {
    name: " Yamunavihar Phase-II ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Rohini Sec-25 ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Nilothi-IV ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Mehrauli ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Ghitorni ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " STP Akshardham ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " STP Kondli New Phase-IV ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Rithla New ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Narela-II ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Chilla ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Okhla Phase-VI ",
    latlng: [28.5246, 77.2793]
  },
  {
    name: " Timarpur ",
    latlng: [28.6572914, 77.2272603]
  },
  {
    name: " Bahadurgarh (b) ",
    latlng: [28.6933239, 76.9332373]
  },
  {
    name: " Bahadurgarh (a) ",
    latlng: [28.692254, 76.923264]
  },
  {
    name: " Badshapur ",
    latlng: [28.402836999999998, 77.30856259999999]
  },
  {
    name: " Mirjapur ",
    latlng: [28.402836999999998, 77.30856259999999]
  },
  {
    name: " Pratapgarh ",
    latlng: [28.402836999999998, 77.30856259999999]
  },
  {
    name: " Palwal ",
    latlng: [28.402836999999998, 77.30856259999999]
  },
  {
    name: " Hodal ",
    latlng: [28.402836999999998, 77.30856259999999]
  },
  {
    name: " Gurgaon-I ",
    latlng: [28.4646148, 77.0299194]
  },
  {
    name: " Gurgaon-II ",
    latlng: [28.4646148, 77.0299194]
  },
  {
    name: " Jhajjar ",
    latlng: [28.606683299999997, 76.65807640000001]
  },
  {
    name: " New Anaj Mandi Indri ",
    latlng: [29.6803266, 76.98962540000001]
  }
];
class MapEasy extends React.Component {
  getStyle(feature) {
    return {
      fillColor: "#ece7f2",
      weight: 2,
      opacity: 1,
      color: "blue",
      dashArray: "3",
      fillOpacity: 0.7
    };
  }
  render() {
    const LeafletMarkers = markers.map(marker => (
      <Marker position={marker.latlng} key={`marker_${marker.name}`}>
        <Popup>
          <span>{marker.name}</span>
          <Link to="/stp_thapar">Click this</Link>
        </Popup>
      </Marker>
    ));
    return (
      <div className="cf mt3">
        <div className="fn fl-ns w-50-ns pr4-ns">
          <LeafletMap
            style={{
              width: "100%",
              height: "600px"
            }}
            center={[25.609575, 85.1238191]}
            zoom={6}
            // maxZoom={15}
            minZoom={2}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}>
            <TileLayer
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            />

            {LeafletMarkers}
            {/* <GeoJSON data={data} style={this.getStyle} /> */}
          </LeafletMap>
        </div>
        <div className="fn fl-ns w-25-ns">Yoo</div>
        <div className="fn fl-ns w-25-ns pr5">
          <SidePanel />
        </div>
      </div>
    );
  }
}

export default MapEasy;
