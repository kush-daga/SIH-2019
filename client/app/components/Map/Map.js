import React from "react";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  GeoJSON
} from "react-leaflet";
import { iconRed } from "./icon-red";
import ReactAutoScroll from "react-to-target-auto-scroll";
import Overview from "./Overview";
// import Chart from "./Chart";
import Demo from "./demo";
import Issue from "./Issues";
// import leaflet from "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import SidePanel from "../SidePanel";

const markers = [
  {
    name: "Mahetsha",
    state: "West Bengal ",
    latlng: [22.5, 88.25],
    status: "No"
  },
  {
    name: "Cossipore",
    state: "West Bengal ",
    latlng: [22.64, 88.37],
    status: "Yes"
  },
  {
    name: "Kalyani",
    state: "West Bengal",
    latlng: [22.97, 88.43],
    status: "Yes"
  },
  {
    name: "Bandipur",
    state: "West Bengal",
    latlng: [22.84, 88.15],
    status: "Yes"
  },
  {
    name: "Karmalichak",
    state: " Bihar ",
    latlng: [25.609575, 85.1238191],
    status: "Yes"
  },
  {
    name: "Hajipur",
    state: "Bihar",
    latlng: [25.685839, 85.214591],
    status: "No"
  },
  {
    name: "Barth",
    state: "Bihar",
    latlng: [25.477585, 85.709094],
    status: "No"
  },
  {
    name: "Nadabwip",
    state: "West Bengal",
    latlng: [23.4, 88.36],
    status: "Yes"
  },
  {
    name: "Sultanganj",
    state: "Bihar",
    latlng: [25.24, 86.740439],
    status: "No"
  },
  {
    name: "Bhagalpur",
    state: "Bihar",
    latlng: [25.2499, 86.89200000000001],
    status: "No"
  },
  {
    name: "Mirzapur",
    state: "Uttar Pradesh",
    latlng: [25.146134600000003, 82.5689952],
    status: "Yes"
  },
  {
    name: "Ramnagar",
    state: "Uttar Pradesh",
    latlng: [25.2764, 83.023823],
    status: "No"
  },
  {
    name: "Allahabad",
    state: "Uttar Pradesh",
    latlng: [25.4381302, 81.8338],
    status: "Yes"
  },
  {
    name: "Berhampore",
    state: "West Bengal",
    latlng: [24.1, 88.25],
    status: "Yes"
  },
  {
    name: "Jagaddal",
    state: "West Bengal",
    latlng: [22.88, 88.42],
    status: "No"
  },
  {
    name: "Joshimath",
    state: "Uttarakhand",
    latlng: [30.55, 79.56],
    status: "No"
  },
  {
    name: "Chamoli",
    state: "Uttarakhand",
    latlng: [30.4, 79.31],
    status: "No"
  },
  {
    name: "Karnaprayag",
    state: "Uttarakhand",
    latlng: [30.25, 79.21],
    status: "No"
  },
  {
    name: "Rudraprayag",
    state: "Uttarakhand",
    latlng: [30.28, 78.98],
    status: "No"
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    latlng: [25.3356491, 83.007],
    status: "Yes"
  },
  {
    name: "Sultanpur",
    state: "Uttar Pradesh",
    latlng: [26.2588602, 82.07168929999999],
    status: "Yes"
  },
  {
    name: "Gangaghat",
    state: "Uttar Pradesh",
    latlng: [26.476219, 80.382149],
    status: "No"
  },
  {
    name: "Kirtinagar",
    state: "Uttarakhand",
    latlng: [30.21, 78.74],
    status: "No"
  },
  {
    name: "Sector 50 Noida",
    state: "Uttar Pradesh",
    latlng: [28.5726442, 77.3547609],
    status: "Yes"
  },
  {
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    latlng: [28.6711527, 77.4120356],
    status: "Yes"
  },
  {
    name: "Okhla phase 1",
    state: "Delhi",
    latlng: [28.52, 77.27],
    status: "No"
  },
  {
    name: "Nazafgarh",
    state: "Delhi",
    latlng: [28.6, 76.98],
    status: "Yes"
  },
  {
    name: "Keshopur",
    state: "Delhi",
    latlng: [28.65, 77.22],
    status: "No"
  },
  {
    name: "Haridwar",
    state: "Uttarakhand",
    latlng: [29.945, 78.163],
    status: "Yes"
  }
];
class MapEasy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      map: true,
      overview: false,
      charts: false,
      download: false,
      issue: false
    };
    this.myRef = React.createRef();
  }
  handleClickChart() {
    if (!this.state.charts) {
      this.setState({
        isLoading: true,
        overview: false,
        charts: true,
        download: false,
        issue: false,
        map: false
      });
    }
  }
  handleClickOverview() {
    if (!this.state.overview) {
      this.setState({
        isLoading: true,
        overview: true,
        charts: false,
        download: false,
        issue: false,
        map: false
      });
    }
  }
  handleClickDownload() {
    if (!this.state.download) {
      this.setState({
        isLoading: true,
        overview: false,
        charts: false,
        download: true,
        issue: false,
        map: false
      });
    }
  }
  handleClickIssues() {
    if (!this.state.issue) {
      this.setState({
        isLoading: true,
        overview: false,
        charts: false,
        download: false,
        map: false,
        issue: true
      });
    }
  }
  handleClickMap() {
    if (!this.state.map) {
      this.setState({
        isLoading: true,
        overview: false,
        charts: false,
        download: false,
        map: true,
        issue: false
      });
    }
  }
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
    var inputProps = {
      icon: iconRed
    };

    const LeafletMarkers = markers.map(marker => (
      <div>
        <Marker
          position={marker.latlng}
          key={`marker_${marker.name}`}
          {...(marker.status === "No" ? { ...inputProps } : {})}>
          <Popup>
            <span />
            <span>{marker.name}</span>
            <Link to="/stp_dash">Click this</Link>
          </Popup>
        </Marker>
      </div>
    ));
    return (
      <div className="cf mt3">
        <div className="fn fl-ns w-25-ns pl2 pr5">
          <SidePanel
            handleClickChart={this.handleClickChart.bind(this)}
            handleClickOverview={this.handleClickOverview.bind(this)}
            handleClickDownload={this.handleClickDownload.bind(this)}
            handleClickIssues={this.handleClickIssues.bind(this)}
          />
        </div>

        <div className="fn fl-ns w-60-ns pr4-ns">
          <LeafletMap
            style={{
              width: "100%",
              height: "500px"
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
        <div className="fn fl-ns w-10-ns pr4-ns inline-block">
          <img
            src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png"
            className="fl"
          />
          <p className="flex pl3 mb2">Status: Inactive</p>
          <img
            src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png"
            className="fl"
          />
          <p className="flex pl3 mb2">Status: Active</p>
        </div>

        {this.state.overview ? (
          <div className="fn fr-ns w-75-ns mr4">
            <Overview />
          </div>
        ) : null}
        {this.state.charts ? (
          <div>
            <div className="fn fr-ns w-75-ns mr4 ">
              <Demo />
            </div>
          </div>
        ) : null}
        {this.state.issue ? (
          <div className="fn fr-ns w-75-ns mr4 mt4 mb4">
            <Issue />
          </div>
        ) : null}
        {this.state.download ? (
          <div className="fn fl-ns w-75-ns"> {/* <Demo /> */}</div>
        ) : null}
      </div>
    );
  }
}

export default MapEasy;
