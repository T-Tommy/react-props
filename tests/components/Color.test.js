import React from 'react';
import { shallow } from 'enzyme';
import Color from '../../src/components/Color';

describe('Color component', () => {
  it('renders a Color', () => {
    const wrapper = shallow(<Color name="blue" rgb={ { r: 0, g: 0, b: 255 } }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
