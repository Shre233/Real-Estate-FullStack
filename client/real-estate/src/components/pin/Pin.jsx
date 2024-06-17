import React from "react";
import "./pin.scss";
import { Link } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";
export default function Pin({ item }) {
  return (
    <div className="pin">
      <Marker  position={[item.latitude, item.longitude]}>
        <Popup>
          <div className="popupContainer">
            <img src={item.img} alt="" />
            <div className="textContainer">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <div className="bed">
                <img src="/bed.png" alt="" />
                <span>{item.bedroom}</span>
              </div>
              <b>${item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
}
