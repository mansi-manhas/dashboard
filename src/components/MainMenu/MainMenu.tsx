import React from "react";

import {
  MainMenuWrapper,
  MenuItemSubtitle,
  MainMenuItems,
} from "./MainMenu.styled";

import {
  CompanyLogo,
  AccountInfo,
  UpperMenuItems,
  ShortcutMenuItems,
  MenuFooter,
} from "./utils";

const MainMenu = () => {
  return (
    <MainMenuWrapper>
      <MainMenuItems>
        <CompanyLogo />
        <AccountInfo />
        <UpperMenuItems />
        <MenuItemSubtitle>SHORTCUT</MenuItemSubtitle>
        <ShortcutMenuItems />
        <MenuFooter />
      </MainMenuItems>
    </MainMenuWrapper>
  );
};

export default MainMenu;
