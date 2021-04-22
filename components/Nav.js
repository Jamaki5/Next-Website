import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Link from "next/link";

function Nav(props) {
  function getWidth(collapsed) {
    if (collapsed) {
      return " w-0";
    }
    return " w-16";
  }

  function getItem({ name, path, show, icon }) {
    if (show) {
      return (
        <Link key={name} href={path}>
          <Tooltip
            arrow
            disableFocusListener
            disableTouchListener
            TransitionComponent={Zoom}
            title={
              <React.Fragment>
                <div className="text-sm">{name}</div>
              </React.Fragment>
            }
            placement="right"
          >
            <IconButton aria-label={name} className="w-16 focus:outline-none">
              {icon}
            </IconButton>
          </Tooltip>
        </Link>
      );
    }
  }

  return (
    <div
      className={
        "fixed md:w-16 overflow-hidden min-h-screen bg-gray-900 bg-opacity-60 md:bg-opacity-100 duration-200 z-40" +
        getWidth(props.collapsed)
      }
    >
      <div className="mt-16">{props.links.map((l) => getItem(l))}</div>
    </div>
  );
}

export default Nav;
