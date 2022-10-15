import { Main } from '../components/Main'

interface DataObject {
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

const DATA: DataObject = {
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas
  in quo corrupti temporibus eius reiciendis nesciunt odit iure ex ut
  odio deserunt pariatur facilis non rem autem, voluptate consectetur
  nemo qui? Aut saepe magnam ad quaerat perspiciatis est maiores?`,
  thumbnailUrl: `https://picsum.photos/id/1060/536/354`,
  thumbnailAlt: `Barista`,
  rating: 4.5,
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Main>
      </Main>
    </div>
  );
};

export default Home;
