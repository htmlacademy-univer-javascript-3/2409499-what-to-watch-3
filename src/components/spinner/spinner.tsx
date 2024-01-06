import '../../../public/css/spinner.css';
import { useAppSelector } from '../../hooks/hooks';
import { selectIsLoading } from '../../store/data-process/data-process.selectors';

function Spinner() {
  const isLoading = useAppSelector(selectIsLoading);
  return isLoading ? (
    <span className="loader"></span>
  ) : null;
}

export default Spinner;
