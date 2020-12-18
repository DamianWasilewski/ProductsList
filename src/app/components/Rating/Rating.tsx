import React from 'react';
import { ContentWrapper } from "./styled";
import { ReactComponent as OutlineStarSvg } from "../../../assets/images/outlineStar.svg";
import { ReactComponent as FilledStarSvg } from "../../../assets/images/filledStar.svg";

export interface RatingProps {
    readonly rating: number;
}

export const Rating = ( { rating }: RatingProps ) => {

    const renderFilledRatingStars = () => {
        return [...Array( rating )].map( ( e, i ) => <FilledStarSvg key={ i } /> );
    };

    const renderOutlineRatingStars = () => {
        return [...Array( 5 - rating )].map( ( e, i ) => <OutlineStarSvg key={ i } /> );
    }
  
    return <ContentWrapper rating={ rating }>{ renderFilledRatingStars() }{ renderOutlineRatingStars() }</ContentWrapper>;
};