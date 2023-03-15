import {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react';

import cn from 'clsx'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'orange' | 'white'
}

export const Button: FC<PropsWithChildren<IButtonProps>> = (
  {children, className, variant, ...rest}
) => {
  return (
    <button {...rest}
            className={cn('rounded-xl shadow font-medium  px-10 py-2', {
              'text-white bg-primary' : variant === 'orange',
              'text-primary bg-white' : variant === 'white'
            }, className)}
    >
      {children}
    </button>
  )
};