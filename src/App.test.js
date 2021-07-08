import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


describe('App', () => {
  let wrapper;
  let input;
  let button;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('should have the `th` "Items"', () => {
    expect(
      wrapper.contains(<th>Items</th>)
    ).toBe(true);
  });

  it('should have a `button` element', () => {
    expect(
      wrapper.containsMatchingElement(
      <button>Add Item</button>
      )
    ).toBe(true);
  });

  it('should have an `input` element', () => {
    expect(
      wrapper.containsMatchingElement(<input />)
    ).toBe(true);
  });

  it('`button` should be disabled', () => {
    const button = wrapper.find('button').first();
    expect(
      button.props().disabled
      ).toBe(true);
  });

  describe('the user populates the input', () => {
    const item = 'Melbourne';

    beforeEach(() => {
      const input = wrapper.find('input').first();
      input.simulate('change', {
        target: {value: item}
      })
    });

    it('should enable `button`', () => {
      const button = wrapper.find('button').first();
      expect(
        button.props().disabled
      ).toBe(true)
    });
    describe('and then clears the input', () => {
      beforeEach(() => {
        const input = wrapper.find('input').first();
        input.simulate('change', {
          target: {value: ''}
        })
      });

      it('should disable the `button`', () => {
        const button = wrapper.find('button').first();
        except(
          button.props().diabled
        ).tobe(true);
      });
    });

    it('should update the state property of `item`', () => {
      expect(
        wrapper.state().item
      ).toEqual(item)
    });

    it('should enable `button`', () => {
      const button = wrapper.find('button').first();
      expect(
        button.props().disabled
      ).toBe(false);
    });

    describe('and the submit the form', () => {
      beforeEach(() => {
        const form = wrapper.find('form').first();
        form.simulate('submit', {
          preventDefault: () => {},
      });
    });
    it('should add item to state', () => {
      expect(
        wrapper.state().items
      ).toContain(item);
    });

    it('should render the item in the table', () => {
      expect(
        wrapper.containsMatchingElement(
          <td>{item}</td>
        )
      ).toBe(true);
    });
    it('should clear the input field', () => {
      const input = wrapper.find('input').first();
      expect(
        input.props().value
      ).toEqual('');
    });

    it('should diable `button`', () => {
      const button = wrapper.find('button').first();
      expect(
        button.props().disabled
      ).toBe(true);
    });


  });
  // assersions go here
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  });
});
