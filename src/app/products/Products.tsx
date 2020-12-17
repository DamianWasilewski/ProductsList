import { Header } from 'app/components/Header';
import { ProductsList } from 'app/containers/ProductsList';
import React from 'react';
import { ContentWrapper } from "./styled";

interface Props {

}

export const Products = () => {

  return (
    <ContentWrapper>
      <Header />
      <ProductsList />
    </ContentWrapper>
  );
};
