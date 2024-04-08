import { Rootstore, Dispatch } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppSelector:TypedUseSelectorHook<Rootstore> = useSelector
export const useAppDispatch = ()=>useDispatch<Dispatch>()