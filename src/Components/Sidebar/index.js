import React from "react";
import "./Sidebar.css";

import SvgDashboard from "../../svg/Dashboard";
import SvgHelp from "../../svg/Help";
import SvgMessages from "../../svg/Messages";
import SvgPages from "../../svg/Pages";
import SvgRoles from "../../svg/Roles";
import SvgSettings from "../../svg/Settings";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="topMenu">
        <li>
          <SvgDashboard />
          <span>Dashboard</span>
        </li>
        <li>
          <SvgPages />
          <span> Pages</span>
        </li>
        <li>
          <SvgMessages />
          <span>Messages</span>
        </li>
        <li>
          <SvgSettings />
          <span>Settings</span>
        </li>
        <li>
          <SvgRoles />
          <span>Roles</span>
        </li>
      </ul>

      <ul>
        <li>
          <SvgHelp />
          <span>Help</span>
        </li>
      </ul>
    </div>
  );
}
