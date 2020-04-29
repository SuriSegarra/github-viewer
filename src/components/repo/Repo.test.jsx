import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('Repo', () => {
  it('matches a repo snapshot', () => {
    const wrapper = shallow(<Repo 
      name='Surelis Segarra' 
      html_url='https://github.com/SuriSegarra'
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
