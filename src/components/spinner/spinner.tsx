import '../../../public/css/spinner.css';
import { useAppSelector } from '../../hooks/hooks';

function Spinner() {
  const isLoading = useAppSelector((state) => state.isLoading);
  return isLoading ? (
    <span className="loader"></span>
  ) : null;
}

export default Spinner;
