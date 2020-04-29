import React from 'react';
import { shallow } from 'enzyme';

import UserSearch from './UserSearch';

describe('UserSearch', () => {
  it('matches a userSearch snapshot', () => {
    const wrapper = shallow(<UserSearch 
      username='Surelis Segarra'
      onUserChange={() => {}}
      onUserSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
