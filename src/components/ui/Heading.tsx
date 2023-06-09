import {FC, PropsWithChildren} from 'react';

import cn from 'clsx'
interface IHeadingProps {
  className?: string
}

export const Heading: FC<PropsWithChildren<IHeadingProps>> = ({className, children}) => {
  return <h1 className={cn('font-semibold text-3xl', className)}>{children}</h1>
};