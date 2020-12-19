import { Link } from "react-router-dom";
import { styled } from "theme";

export const StyledHintLink = styled( Link )`
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: underline;
    color: ${ props => props.theme.colors.darkGrey };
`;