import { styled } from "theme";
import { RatingProps } from "./Rating";

export const ContentWrapper = styled.div<RatingProps>`
    display: flex;

    svg.filledStar {
        path {
            width: 1.3rem;
            height: 1.2rem;
            fill: ${ props => props.theme.colors.darkYellow };
        }
    }

    svg.outlineStar {
        path {
            fill: ${ props => props.theme.colors.grey };
        }
    }
`; 