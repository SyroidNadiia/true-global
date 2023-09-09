import React, { useState, ChangeEvent, FocusEvent } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { InputStyled, InputUnit, PasswordWrapperIcon } from './Input.styled';

interface InputProps {
  height?: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  background?: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  height,
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <>
      {type === 'password' ? (
        <InputUnit>
          <InputStyled 
            type={showPassword ? 'text' : type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
           
            {...rest}
          />
          <PasswordWrapperIcon onClick={handleTogglePassword}>
            {showPassword ? (
              <AiOutlineEye fill="#161616" />
            ) : (
              <AiOutlineEyeInvisible fill="#161616" />
            )}
          </PasswordWrapperIcon>
        </InputUnit>
      ) : (
        <InputStyled
          type={showPassword ? 'text' : type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          
          {...rest}
        />
      )}
    </>
  );
};

export default Input;

