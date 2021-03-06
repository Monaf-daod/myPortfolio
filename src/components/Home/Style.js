import styled from "styled-components";

export const HomeSection = styled.div`
  height: 100vh;
  position: relative;
  background: url("images/cover6.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  z-index: 0;
  @media (min-width: 320px) and (max-width: 599px) {
    justify-content: center;
  }
`;

export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

export const HomeInformation = styled.div`
  padding: 3rem;
  margin: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 3;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const HomeTitle = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  user-select: none;
  color: var(--primary-font-color);
  @media (min-width: 320px) and (max-width: 599px) {
    font-size: 1.9rem;
  }
`;
export const HomeInfo = styled.h4`
  font-size: 3rem;
  font-weight: 500;
  font-style: normal;
  user-select: none;
  color: var(--second-font-color);
  @media (min-width: 320px) and (max-width: 599px) {
    font-size: 1.8rem;
  }
`;

export const Homedesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: #fff1e1;
  font-weight: 500;
  user-select: none;
  margin-bottom: 20px;
  text-shadow: 0 1px 0 #1d3c4590, 0 2px 0 #1d3c4580, 0 3px 0 #1d3c4570,
    0 4px 0 #1d3c4560, 0 5px 0 #1d3c4550, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2);
`;

export const HomeBtn = styled.button`
  background: var(--primary-font-color);
  color: #fff;
  font-size: 1.2rem;
  width: 150px;
  border: 1px solid var(--primary-font-color);
  padding: 15px;
  margin-top: 10px;
  user-select: none;
  cursor: pointer;
  font-weight: 400;
  border-radius: 10px;
  :hover {
    background: transparent;
    color: var(--primary-font-color);
    border: 1px solid var(--primary-font-color);
    transition: all 0.6s ease;
  }

  @media (min-width: 320px) and (max-width: 599px) {
    font-size: 0.9rem;
    width: 120px;
  }
`;
