import React from "react";
import {
  ItemWrapper,
  ItemImage,
  ItemInfoWrapper,
  MainInfo,
  ItemName,
  ItemPrice,
  ItemBrand,
  ItemDetails,
  ItemModel,
  ItemDesc
} from "./style";

const ItemComponent = props => {
  const {
    image,
    name,
    price,
    brand,
    model,
    category,
    description
  } = props.item;
  return (
    <ItemWrapper>
      <ItemImage imageUrl={image} />
      <ItemInfoWrapper>
        <MainInfo>
          <ItemName>{name}</ItemName>
          <ItemPrice>{price}€</ItemPrice>
        </MainInfo>
        <ItemDetails>
          <ItemBrand>{brand}</ItemBrand>
          <ItemModel>
            | {model} &middot; {category}
          </ItemModel>
        </ItemDetails>
        <ItemDesc>{description}</ItemDesc>
      </ItemInfoWrapper>
    </ItemWrapper>
  );
};

export default ItemComponent;
