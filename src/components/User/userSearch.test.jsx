import React from 'react';
import { shallow } from 'enzyme';

import UserSearch from './UserSearch';

describe('UserSearch', () => {
  it('matches a userSearch snapshot', () => {
    const wrapper = shallow(<UserSearch 
      username='something'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
