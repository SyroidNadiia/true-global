import React, { ReactNode, MouseEvent } from 'react';
import { ButtonStyled } from './Button.styled';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  width,
  height,
  ...rest
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      style={{ width, height }}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
