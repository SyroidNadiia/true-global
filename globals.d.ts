import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      Input: React.InputHTMLAttributes<HTMLInputElement>;
      Button: React.ButtonHTMLAttributes<HTMLButtonElement>;
    }
  }
}
