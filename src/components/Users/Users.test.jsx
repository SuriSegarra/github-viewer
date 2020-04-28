import React from 'react';
import { shallow } from 'enzyme';
import Users from './Users';

describe('Users', () => {
  it('match a users snapshot', () => {
    const users = [
      {
        login: 'Jake',
        followers_url:'1',
        following:'5',
        url:'www.jacob-cline.com',
        avatar_url: 'https://www.fillmurray.com/640/360'
      },
      {
        login: 'Nicholas',
        followers_url:'10',
        following:'59',
        url:'www.nicholascage.com',
        avatar_url: 'https://www.placecage.com/640/360'
      },
      {
        login: 'steven',
        followers_url:'17',
        following:'19',
        url:'www.steven.com',
        avatar_url: 'https://www.stevensegallery.com/640/360'
      },
    ];
    const wrapper = shallow(<Users users={users}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
