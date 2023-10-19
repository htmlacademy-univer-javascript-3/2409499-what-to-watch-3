import {Link} from 'react-router-dom';

function PageNotFound() : JSX.Element {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>404 Not Found</h1>
      <Link to='/'>Перейти на главную страницу</Link>
    </>
  );
}

export default PageNotFound;
