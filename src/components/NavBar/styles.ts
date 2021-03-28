import styled from "styled-components";
import colors from "../../config/colors";

export const Nav = styled.nav`
  height: 17vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLeftSide = styled.div`
  ul {
    display: flex;
  }
  margin-left: 20px;
  li {
    list-style: none;
    display: flex;
    align-items: center;
  }
  #goback {
    height: 20px;
    width: 20px;
  }
  #logo {
    height: 35px;
    width: 35px;
  }
  #title-project {
    margin-left: 10px;
    color: #170c3a;
  }
`;

export const NavRightSide = styled.div``;

export const Badge = styled.div`
  height: 25px;
  width: 34px;
  border-radius: 13px;
  background-color: ${colors.red};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
