import { Menu } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const MapView: React.FC = () => {
  const [xNECoord, setXNECoord] = useState<number>(0);
  const [yNECoord, setYNECoord] = useState<number>(0);

  const [xSWCoord, setXSWCoord] = useState<number>(0);
  const [ySWCoord, setYSWCoord] = useState<number>(0);

  const [zoom, setZoom] = useState<number>(0);

  const mapStyle = {
    width: "100%",
    height: "700px",
  };

  const initMap = () => {
    // set center of the map
    let locPosition;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        locPosition = new naver.maps.LatLng(lat, lon);
      });
    } else {
      locPosition = new naver.maps.LatLng(37.5677463677699, 126.9153946742084);
    }

    // create map
    const map = new naver.maps.Map("map", {
      center: locPosition,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      zoom: 15,
    });

    // set bounds_changed listener
    const getBounds = debounce(bounds => {
      setZoom(map.getZoom());
      setXNECoord(map.getBounds().getNE().x);
      setYNECoord(map.getBounds().getNE().y);
      setXSWCoord(map.getBounds().getSW().x);
      setYSWCoord(map.getBounds().getSW().y);
    }, 400);
    naver.maps.Event.addListener(map, "bounds_changed", getBounds);
  };

  useEffect(() => {
    initMap();
  }, []);
  return (
    <>
      <div id="map" style={mapStyle} />
      <div>NE x좌표: {xNECoord}</div>
      <div>NE y좌표: {yNECoord}</div>
      <div>SW x좌표: {xSWCoord}</div>
      <div>SW y좌표: {ySWCoord}</div>
      <div>zoom: {zoom}</div>
    </>
  );
};

export default MapView;