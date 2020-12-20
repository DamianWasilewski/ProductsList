import React, { ReactNode } from 'react';
import { Backdrop, ContentWrapper } from "./styled";

interface Props {
    children: ReactNode;
    isOpen?: boolean;
}

export const ModalWindow = ( { children, isOpen = false }: Props ) => {
  
    return (
        <>
            { isOpen ? 
                <Backdrop>
                    <ContentWrapper>
                        { children }
                    </ContentWrapper>
                </Backdrop> : null }
        </>
    );
};