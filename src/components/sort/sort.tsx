import * as React from "react";
import {useState} from "react";
import PropTypes from "prop-types";

const MENU_STATE = {
  OPENED: `opened`,
  CLOSED: `closed`
};

export const Sort = (props) => {
  const {setItem} = props;
  const [closed, toggleState] = useState(true);
  const [text, setText] = useState(`Popular`);

  const handleTabClick = (target) => {
    setItem(target);
    setText(target.textContent);
    toggleState(true);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={() => toggleState(!closed)} className="places__sorting-type" tabIndex="0">
        {text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${closed ? MENU_STATE.CLOSED : MENU_STATE.OPENED}`}>
        <li className="places__option" id="default" onClick={(evt) => {
          handleTabClick(evt.target);
        }} tabIndex="0">Popular</li>
        <li className="places__option" id="lowToHigh" onClick={(evt) => {
          handleTabClick(evt.target);
        }} tabIndex="0">Price: low to high</li>
        <li className="places__option" id="highToLow" onClick={(evt) => {
          handleTabClick(evt.target);
        }} tabIndex="0">Price: high to low</li>
        <li className="places__option" id="topRated" onClick={(evt) => {
          handleTabClick(evt.target);
        }} tabIndex="0">Top rated first</li>
      </ul>
    </form>
  );
};

Sort.propTypes = {
  setItem: PropTypes.func,
};
