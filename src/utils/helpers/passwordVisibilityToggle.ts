import { Dispatch, RefObject, SetStateAction } from 'react';
const togglePasswordVisibility = (
  inputRef: RefObject<HTMLInputElement>,
  setShowPassword: Dispatch<SetStateAction<boolean>>
): void => {
  setShowPassword((prevShowPassword: boolean) => !prevShowPassword);
  const input = inputRef.current;
  if (input) {
    //@ts-ignore
    input.type = prevShowPassword ? 'password' : 'text';
  }
};

export default togglePasswordVisibility;
