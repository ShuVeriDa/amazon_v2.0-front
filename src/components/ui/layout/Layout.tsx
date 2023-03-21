import {FC, PropsWithChildren} from 'react';
import {Sidebar} from "@/ui/layout/sidebar/Sidebar";
import {Header} from "@/ui/layout/header/Header";

export const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <div>
      <Header />
      <div className={'grid'} style={{gridTemplateColumns: "1fr 4fr"}}>
        <Sidebar />
        <main className={'p-12'}>
          {children}
        </main>
      </div>
    </div>
  );
};