import { styled } from "theme";
import { RatingProps } from "./Rating";

export const ContentWrapper = styled.div<RatingProps>`
    display: flex;

    svg.filledStar {
        path {
            fill: ${ props => props.theme.colors.darkYellow };
        }
    }

    svg.outlineStar {
        path {
            fill: ${ props => props.theme.colors.grey };
        }
    }
`; 