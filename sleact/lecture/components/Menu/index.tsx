import React, { CSSProperties, FC, useCallback } from 'react';
import { CloseModalButton, CreateMenu } from "./styles";

interface Props {
  children: any;
  show: boolean;
  onCloseModal: () => void;
  style: CSSProperties;
  closeButton?: boolean;
}

const Menu: FC<Props> = ({ children, style, show, onCloseModal, closeButton }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation()
  }, [])
  return (
    <CreateMenu onClick={stopPropagation}>
      <div style={style}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  )
}
Menu.defaultProps = {
  closeButton: true,
}

export default Menu;