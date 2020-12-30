import React, { ReactNode, useCallback, useEffect } from 'react';
import { Backdrop, ContentWrapper } from "./styled";

interface Props {
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const ModalWindow = ( { children, isOpen = false, onClose }: Props ) => {

    const handleKeyUp = useCallback(
        event => {
            if ( event.code === "Escape" ) {
                event.stopPropagation();
                if ( onClose ) {
                    onClose();
                }
            }
        }, [ onClose ] );

    useEffect( () => {
        window.addEventListener( "keyup", handleKeyUp );

        return () => {
            window.removeEventListener( "keyup", handleKeyUp );
        };
    }, [ handleKeyUp ] );

    return (
        <>
            { isOpen ? 
                <ContentWrapper>
                    <Backdrop data-cy="modal-backdrop" onClick={ onClose } />
                    { children }
                </ContentWrapper> : null }
        </>
    );
};