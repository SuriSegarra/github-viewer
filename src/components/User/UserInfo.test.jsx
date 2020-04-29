import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';

describe('UserInfo', () => {
  it('matches a userInfo snapshot', () => {
    const wrapper = shallow(<UserInfo login='Surelis Segarra' 
      followers='1' 
      following='3' 
      url='https://github.com/SuriSegarra' 
      avatar='https://avatars2.githubusercontent.com/u/57576258?v=4' />);
    expect(wrapper).toMatchSnapshot();
  });
});
