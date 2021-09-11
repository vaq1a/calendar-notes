import {bindActionCreators} from "redux";
import {allActionCreator} from "../store/actions";
import {useDispatch} from "react-redux";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActionCreator, dispatch)
}