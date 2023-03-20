import {FC} from 'react';
import Meta from "@/ui/Meta";
import {Heading} from "@/ui/Heading";
import {Catalog} from "@/ui/catalog/Catalog";

interface IHomeProps {
}

export const Home: FC<IHomeProps> = () => {
  return (
    <Meta title={'Home'}>
      <Heading>Hello world</Heading>

      {/*<Catalog products={} />*/}
    </Meta>
  );
};