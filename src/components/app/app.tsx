import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  filmName: string;
  genre: string;
  filmYear: number;
};

function App({filmName, genre, filmYear}: AppProps) : JSX.Element {
  return (
    <MainPage filmName={filmName} genre={genre} filmYear={filmYear} />
  );
}

export default App;
