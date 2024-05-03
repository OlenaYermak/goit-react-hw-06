import { useDispatch, useSelector } from "react-redux";

import { selectFilteredName, searchContact } from "../../redux/filterSlice";

import css from "./SearchBox.module.css"

export default function SearchBox() {
    const dispatch = useDispatch();
    const value = useSelector(selectFilteredName);
    return (
        <div className={css.searchBoxWrapper}>
            <p>Find contacts by name</p>
            <input className={css.searchInput} type="text" value={value}  onChange={(event) => dispatch(searchContact(event.target.value))}></input>
        </div>
    )
}









