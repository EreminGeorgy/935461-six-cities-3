import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./main-empty.jsx";

it(`<SignIn /> should render SignIn`, () => {
  const tree = renderer
    .create(<SignIn/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
