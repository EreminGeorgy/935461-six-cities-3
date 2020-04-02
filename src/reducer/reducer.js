import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as application} from "./application/application.js";
import {reducer as user} from "./user/user.js";
import {reducer as comments} from "./comments/comments.js";
import {reducer as favorites} from "./favorites/favorites.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APPLICATION]: application,
  [NameSpace.USER]: user,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.FAVORITES]: favorites,
});
