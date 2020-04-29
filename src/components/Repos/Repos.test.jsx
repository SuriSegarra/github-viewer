import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos', () => {
  it('matches repos snapshot', () => {
    const repos = [
      {
        id:1,
        name: '-recipe-app',
        html_url:'https://github.com/SuriSegarra/-recipe-app'
      },
      {
        id:2,
        name: 'About-Me',
        html_url:'https://github.com/SuriSegarra/About-Me'
      }
    ];
    const wrapper = shallow(<Repos repos={repos}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
