import {FC} from 'react';

interface ISidebarProps {
}

export const Sidebar: FC<ISidebarProps> = () => {
  return (
    <aside className={'h-screen bg-secondary'}>
      SIDEBAR
    </aside>
  );
};