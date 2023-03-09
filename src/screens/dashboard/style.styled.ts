import styled from "styled-components";

export const LeftNav = styled.div`
    position: absolute;
    width: 248px;
    height: 100vh;
    left: 0px;
    top: 0px;

    background: #3C38CE;
`;

export const MainMenuWrapper = styled.div`
    height: 100vh;
    width: 16%;
    position: fixed;
    zIndex: 1;
    top: 0;
    overflow: hidden;
    paddingTop: 27px;
    left: 0;

    @media (max-width: 375px) {
       display: none;
    }
`;

export const MenuIconWrapper = styled.div`
    position: fixed;
    zIndex: 1;
    overflow: hidden;
    paddingTop: 27px;

    @media (min-width: 375px) {
       display: none;
    }
`;

export const MenuImg = styled.img`
    margin-top: 45px;
    margin-left: 10px;
    width: 20px;
    height: 20px;
`;

export const DashboardWrapper = styled.div`
    height: 100vh;
    width: 84%;
    position: fixed;
    zIndex: 1;
    top: 0;
    overflow: auto;
    paddingTop: 0px;
    right: 0;

    @media (max-width: 375px) {
        width: 95%;
    }
`;

export const MyDashboard = styled.div`
    margin: 18px;
    position: relative;
    display: grid;
`;


export const HeaderWrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(232px, auto));
    margin-bottom: 20px;
    
    span:last-of-type {
        margin-left: auto;
    }
`;

export const TitleAndTagWrapper = styled.div`
    display: flex;
    align-items: center;
    grid-column: span 2;
`;