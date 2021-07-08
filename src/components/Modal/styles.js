import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9;

  background-color: #333c;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  min-width: 750px;
  min-height: 750px;
  max-height: calc(100vh - 20px);
  padding: 20px;
  background-color: var(--primary);

  z-index: 19;

  overflow-y: auto;

  /* background-color: var(--light); */
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;

  position: relative;

  > span {
    position: absolute;
    top: 15px;
    right: 20px;
    color: white;

    font-size: 30px;

    cursor: pointer;
    transition: 0.2s;

    :hover {
      color: var(--primary);
    }
  }

  > header {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    color: white;
    margin: 0px 20px;
    margin-bottom: 10px;
  }
`;
