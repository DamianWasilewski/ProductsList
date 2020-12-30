import React from 'react';
import { ContentWrapper, SubText, Text } from "./styled";
import { ReactComponent as EmptyListSvg } from "../../../assets/images/emptyList.svg";

export const NoProductsInfo = () => {
  
    return (
        <ContentWrapper>
            <EmptyListSvg />
            <Text>{ "Ooops... It's empty here" }</Text>
            <SubText>{ "There are no products on the list" }</SubText>
        </ContentWrapper>
    );
};