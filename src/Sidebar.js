import React from "react";
import "./Sidebar.css";
// import { Avatar } from "@material-ui/core/Avatar";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>name</h2>
        <h4>Name@name.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">number1</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">number2</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
