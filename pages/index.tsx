import { Main } from '../components/Main'

interface DataObject {
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Main>
      </Main>
    </div>
  );
};

export default Home;
