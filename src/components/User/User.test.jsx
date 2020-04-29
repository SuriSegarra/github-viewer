import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('User', () => {
  it('matches a user snapshot', () => {
    const wrapper = shallow(<User login='Surelis Segarra' 
      followers_url='1' 
      following_url='3' 
      url='https://github.com/SuriSegarra' 
      avatar_url='https://avatars2.githubusercontent.com/u/57576258?v=4' />);
    expect(wrapper).toMatchSnapshot();
  });
});
