import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

// import { Navigate, useNavigate } from "react-router-dom";

const SoftData = [
  {
    name: "Software Development",
    path: "./SoftwareDevelopment"
  },
  {
    name: "ERP Software",
    path: "/ERPSoftware",
  },
  {
    name: "SAAS Software",
    path: "/SAASSoftware",
  },
  {
    name: "Warehouse Managment Software",
    path: "/WarehouseManagmentSoftware",
  },
  {
    name: "HRMS Software",
    path: "/HRMSSoftware",
  },
  {
    name: "Inventory Managment Software",
    path: "/InventoryManagmentSoftware",
  },
  {
    name: "Accounting & Billing Software",
    path: "/AccountingBillingSoftware",
  },
  {
    name: "POS System Software",
    path: "/POSSystemSoftware",
  },
  {
    name: "Employee Tracking Software",
    path: "/EmployeeTrackingSoftware",
  },
  {
    name: "Attendance System Software",
    path: "/AttendanceSystemSoftware",
  },
  {
    name: "Library Managment System",
    path: "/LibraryManagmentSystem",
  },
  {
    name: "LMS With Live Class Software",
    path: "/LMSWithLiveClassSoftware",
  },
  {
    name: "University Managment  Software",
    path: "/UniversityManagmentSoftware",
  },
  {
    name: "Quiz System Software",
    path: "/QuizSystemSoftware",
  },
  {
    name: "Astrology Software",
    path: "/AstrologySoftware",
  },
  {
    name: "Travel Booking Software",
    path: "/TravelBookingSoftware",
  },
  {
    name: "Matrimonial Software",
    path: "/MatrimonialSoftware",
  },
  {
    name: "Restaurant Managment System Software",
    path: "/RestaurantManagmentSoftware",
  },
  {
    name: "Hotel Managment Software",
    path: "/HotelManagmentSoftware",
  },
  {
    name: "Event management Software",
    path: "/EventmanagementSoftware",
  },
  {
    name: "Hospital Managment System Software",
    path: "/HospitalManagementSoftware",
  },
  {
    name: "Real state Software",
    path: "/RealstateSoftware",
  },
  {
    name: "Clinic Managment System Software",
    path: "/ClinicManagmentSoftware",
  },
  {
    name: "MLM Software",
    path: "/MLMSoftware",
  },
  {
    name: "Trading Software",
    path: "/TradingSoftware",
  },
  {
    name: "Job Portal Software",
    path: "/JobPortalSoftware",
  },
];

export default function Software({ closesidebar }) {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  // const navigate = useNavigate()
  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = () => {
    closesidebar();
    setOpen(false)
  };

  return (
    <List sx={{ paddingBlock: '0px' }}>
      <ListItemButton onClick={handleClick} sx={{ height: '45px' }}>
        {/* <ListItemIcon>
          <KeyboardBackspaceIcon sx={{ color: "white" }} />
        </ListItemIcon> */}

        <ListItemText primary="Software " />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List onClick={handleListItemClick} component="div" disablePadding>

          {
            SoftData.map((item, index) => {
              return (


                <ListItemButton sx={{ pl: 4 }}
                  onClick={() => navigate(item.path)}
                >
                  {/* <PeopleIcon /> */}
                  {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
                  <ListItemText primary={item.name} />
                </ListItemButton>

              )
            })
          }



        </List>
      </Collapse>
    </List>
  );
}