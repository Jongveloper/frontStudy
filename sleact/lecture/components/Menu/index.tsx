import React, { CSSProperties, FC, PropsWithChildren, useCallback } from 'react';
import { CloseModalButton, CreateMenu } from "./styles";

interface Props {
  children: any;
  show: boolean;
  onCloseModal: (e: any) => void;
  style: CSSProperties;
  closeButton?: boolean;
}

const Menu: FC<PropsWithChildren<Props>> = ({ children, style, show, onCloseModal, closeButton }) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, [])
  return (
    <CreateMenu onClick={onCloseModal}>
      <div onClick={stopPropagation} style={style}>
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