import React from "react";
import {
  companyLogo,
  accountInfo,
  dashboardIcon,
  overviewIcon,
  chatIcon,
  teamIcon,
  tasksIcon,
  reportsIcon,
  settingsIcon,
  storageStatus,
  loggedUserInfo,
} from "../../assets";
import {
  CompanyLogoWrapper,
  AccountInfoWrapper,
  AccountInfoImg,
  MenuItems,
  MenuItemWrapper,
  MenuItemFont,
  MenuFooterWrapper,
  StorageStatusWrapper,
  StorageStatus,
  LoggedUserWrapper,
  LoggedUser,
} from "./MainMenu.styled";

export const CompanyLogo = () => (
  <CompanyLogoWrapper>
    <img src={companyLogo} alt="" />
  </CompanyLogoWrapper>
);

export const AccountInfo = () => (
  <AccountInfoWrapper>
    <AccountInfoImg src={accountInfo} alt="" />
  </AccountInfoWrapper>
);

export const UpperMenuItems = () => (
  <MenuItems>
    <MenuItemWrapper>
      <img width="24px" height="24px" src={dashboardIcon} alt="" />
      <MenuItemFont isSelected={true}>Dashboard</MenuItemFont>
    </MenuItemWrapper>
    <MenuItemWrapper>
      <img width="24px" height="24px" src={overviewIcon} alt="" />
      <MenuItemFont>Overview</MenuItemFont>
    </MenuItemWrapper>
    <MenuItemWrapper>
      <img width="24px" height="24px" src={chatIcon} alt="" />
      <MenuItemFont>Chats</MenuItemFont>
    </MenuItemWrapper>
    <MenuItemWrapper>
      <img width="24px" height="24px" src={teamIcon} alt="" />
      <MenuItemFont>Teams</MenuItemFont>
    </MenuItemWrapper>
  </MenuItems>
);

export const ShortcutMenuItems = () => (
  <MenuItems>
    <MenuItemWrapper>
      <img width="24px" height="24px" src={tasksIcon} alt="" />
      <MenuItemFont>Tasks</MenuItemFont>
    </MenuItemWrapper>
    <MenuItemWrapper>
      <img width="24px" height="24px" src={reportsIcon} alt="" />
      <MenuItemFont>Reports</MenuItemFont>
    </MenuItemWrapper>
    <MenuItemWrapper>
      <img width="24px" height="24px" src={settingsIcon} alt="" />
      <MenuItemFont>Settings</MenuItemFont>
    </MenuItemWrapper>
  </MenuItems>
);

export const MenuFooter = () => (
  <MenuFooterWrapper>
    <StorageStatusWrapper>
      <StorageStatus src={storageStatus} alt="" />
    </StorageStatusWrapper>
    <LoggedUserWrapper>
      <LoggedUser src={loggedUserInfo} alt="" />
    </LoggedUserWrapper>
  </MenuFooterWrapper>
);
