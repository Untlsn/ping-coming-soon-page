import { ChangeEvent } from 'react';

export interface InputTextProps {
  value?: string,
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void,
  error?: string,
}
