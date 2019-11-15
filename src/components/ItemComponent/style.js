import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 25px;
  margin: 10px;
  padding: 10px;
`;

export const ItemImage = styled.div`
  height: 280px;
  width: 280px;
  background: ${props => `url(${props.imageUrl})`} no-repeat center;
  background-size: contain;
`;

export const ItemInfoWrapper = styled.div`
  padding: 10px;
  max-width: 280px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid lightgray;
  padding-top: 10px;
`;
export const ItemName = styled.p`
  flex: 5;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const ItemPrice = styled.p`
  flex: 1;
  text-align: right;
  font-size: larger;
  font-weight: bold;
  color: deepskyblue;
  margin: 0;
`;

export const ItemBrand = styled.p`
  font-size: 15px;
  color: darkslategrey;
  margin: 0;
  text-align: left;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

export const ItemModel = styled.p`
  font-size: 12px;
  color: grey;
  margin: 0;
  text-align: left;
  margin-left: 5px;
  line-height: 1.5;
`;

export const ItemDesc = styled.p`
  width: 260px;
  font-size: 15px;
  color: grey;
  margin: 0;
  text-align: left;
  margin-top: 10px;
  color: black;
`;
