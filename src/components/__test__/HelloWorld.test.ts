import HelloWorld from '../HelloWorld.vue';
import { render, screen } from '../../../vitest-setup';

describe('Hello', async () => {
  it('renders the component', async () => {
    render(HelloWorld, {
      props: {
        msg: 'This is a test message',
      },
    });

    await screen.findByText('This is a test message');
  });

  it('has a working counter', async () => {
    const { testUser } = render(HelloWorld, {
      props: {
        msg: '',
      },
    });

    const button = await screen.findByTestId('counter-button');

    expect(button).toHaveTextContent('0');

    await testUser.click(button);

    expect(button).toHaveTextContent('1');
  });
});
