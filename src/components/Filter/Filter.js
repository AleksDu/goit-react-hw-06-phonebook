import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/app/contact-selector";
import * as actions from "../../redux/app/contact-actions";

import s from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = (e) => dispatch(actions.changeFilter(e.target.value));
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        placeholder="Find?"
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default Filter;
