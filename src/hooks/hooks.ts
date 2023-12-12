import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../store/reducer';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
