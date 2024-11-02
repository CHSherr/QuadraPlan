import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TableChartIcon from "@mui/icons-material/TableChart";
import ChecklistIcon from "@mui/icons-material/Checklist";

const Sidebar = () => {
  return (
    <div className="bg-purple-700 ">
      <ol className="flex flex-col gap-3 mt-3 items-start pl-[10%]">
        <li className="flex flex-row gap-2 text-white">
          <HomeIcon></HomeIcon>Home
        </li>
        <li className="flex flex-row gap-2 text-white">
          <TableChartIcon />
          Matrix
        </li>
        <li className="flex flex-row gap-2 text-white">
          <ChecklistIcon />
          List
        </li>
      </ol>
    </div>
  );
};

export default Sidebar;
