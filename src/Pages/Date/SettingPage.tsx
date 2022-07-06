import { TableHead } from "@mui/material";
import React from "react";
import { Tab } from "react-bootstrap";
import {
  NavBarSt,
  BackButton,
  SaveButton,
  TextHead,
  TextDesc,
  SettingHeader,
  SettingTable,
  SettingColum,
  SettingHead,
  SettingHead2,
  SettingColum1,
  SettingColum2,
} from "../Date/SettingPage.styled";

const SettingPage: React.FC = () => {
  return (
    <div>
      <NavBarSt>
        <BackButton>Back</BackButton>
        <SaveButton>SaveChange</SaveButton>
      </NavBarSt>
      <SettingHeader>
        <TextHead>Holiday Settings</TextHead>
        <TextDesc>วันหยุดราชการ / วันหยุดตามราชกิจจานุเบกษา</TextDesc>
      </SettingHeader>
      <SettingTable>
        <SettingColum>
          <SettingHead>Firstname</SettingHead>
          <SettingHead2>Lastname</SettingHead2>
        </SettingColum>
        <SettingColum>
          <SettingColum1>Jill</SettingColum1>
          <SettingColum2>Smith</SettingColum2>
        </SettingColum>
        <SettingColum>
          <SettingColum1>Eve</SettingColum1>
          <SettingColum2>Jackson</SettingColum2>
        </SettingColum>
        <SettingColum>
          <SettingColum1>John</SettingColum1>
          <SettingColum2>Doe</SettingColum2>
        </SettingColum>
      </SettingTable>
    </div>
  );
};

export default SettingPage;