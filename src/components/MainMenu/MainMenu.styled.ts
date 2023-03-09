import styled from "styled-components";
import { getFontFamily, getFontStyle, getFontWeight } from "../../theme/tokens";

export const MainMenuWrapper = styled.div`
    position: absolute;
    width: 248px;
    height: 100vh;
    left: 0px;
    top: 0px;

    background: #3C38CE;
    padding: 24px;
`;

export const MainMenuItems = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const CompanyLogoWrapper = styled.div`
    text-align: left;
    border-bottom: 0.5px solid #E6E7E9;
    width: 200px;
`;

export const AccountInfoWrapper = styled.div`
    width: 200px;
    height: 70px;
    background: #4A4DE6;
    border-radius: 8px;

    margin-top: 24px;
`;

export const AccountInfoImg = styled.img`
    margin: 16px;
`;

export const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuFooterWrapper = styled.div`
    margin-top: 220px;
`;

export const StorageStatusWrapper = styled.div`
    margin: 0;
    display: flex;
    border-bottom: 0.5px solid #E6E7E9;
    width: 200px;
`;

export const StorageStatus = styled.img`
    margin-bottom: 25px;
`;

export const LoggedUserWrapper = styled.div`
    display: flex;
`;

export const LoggedUser = styled.img`
    margin-top: 24px;
`;

export const MenuItemWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
`;

export const MenuItemFont = styled.div`
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("normal")};
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.3px;
    color: ${(props: {isSelected?: boolean}) => props.isSelected ? '#fff' : 'rgba(255, 255, 255, 0.7);'};

    margin: 0;
    margin-left: 14px;
`;

export const MenuItemSubtitle = styled.div`
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("normal")};
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.3px;
    
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.42);

    text-align: left;
    margin-top: 34px;
`;