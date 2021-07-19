import styled from 'styled-components';

const MainGrid = styled.main`
  width:100%;
  display: grid;
  grid-gap: 10px; // espaçamento entre as grids
  padding: 16px;

  @media(min-width: 860px){
    grid-template-areas: "profileArea mainArea relationsArea";
    grid-tempĺate-columns: "160px 1fr 312px";
  }
`;

export default MainGrid;