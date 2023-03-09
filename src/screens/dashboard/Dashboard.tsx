import React from "react";
import { menuIcon } from "../../assets";

import MainMenu from "../../components/MainMenu/MainMenu";

import { DashboardWrapper, MainMenuWrapper, MenuIconWrapper, MenuImg, MyDashboard } from "./style.styled";
import { DashboardHeader, FirstRow, SecondRow, ThirdRow } from "./utils";

const Dashboard = () => {
  return (
    <>
      <MainMenuWrapper>
        <MainMenu />
      </MainMenuWrapper>
      <MenuIconWrapper>
        <MenuImg src={menuIcon} alt='' />
      </MenuIconWrapper>
      <DashboardWrapper>
        <MyDashboard>
          <DashboardHeader />
          <FirstRow />
          <SecondRow />
          <ThirdRow />
        </MyDashboard>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
