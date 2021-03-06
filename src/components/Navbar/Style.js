import styled from "styled-components";

export const NavbarSection = styled.div`
  width: 100%;
  padding: 15px 0px;
  padding-left: 10rem;
  overflow: hidden;
  color: ${(props) =>
    props.backgroundVisible ? "var(--primary-font-color)" : "#fff"};
  background: ${(props) =>
    props.backgroundVisible ? "transparent" : "var(--primary-font-color)"};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
  @media (min-width: 320px) and (max-width: 767px) {
    padding-left: 0.7rem;
  }
`;

export const UlList = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

export const ListItem = styled.span`
  font-weight: 500;
  padding: 8px;
  margin-left: 5px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: var(--forth-color);
    background: var(--primary-font-color);
    border-radius: 20px 0px 20px 0px;
  }
`;

export const VerticalMenu = styled.div`
  display: none;
  position: relative;
  @media (min-width: 320px) and (max-width: 767px) {
    display: inline-block;
  }
`;

export const VerticalItemsList = styled.div`
  width: ${(props) => (props.isOpen ? "50vw" : "0vw")};
  height: 100vh;
  background: #fff;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? 0 : "-200px")};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: left 0.7s ease-in-out, width 0.8s ease;
`;

export const MenuSvg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const VerticalListItem = styled.span`
  font-weight: 500;
  width: 100%;
  padding: 8px;
  color: var(--primary-font-color);
  margin: 4px auto;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--forth-color);
    background: var(--primary-font-color);
  }
`;
