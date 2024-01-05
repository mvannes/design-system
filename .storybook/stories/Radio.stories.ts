import type { StoryObj, Meta } from '@storybook/html';


interface RadioArgs {
  label: string;
  variant: 'primary' | 'secondary' | 'accent';
  amountOfRadios: number;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Radio',
  tags: ['autodocs'],
  render: (args) => {
    const variant = `radio-${args.variant}`;

    const radios = [];

    for (let i =0; i < args.amountOfRadios; i++) {
      radios.push(`
        <li class="radio">
          <input type="radio" name="radio" id="radio-${i}" />
          <label for="radio-${i}">${args.label}</label>
        </li>`)
    }
    return `
    <ul class="radio-holder ${variant}">
            ${radios.join('\n')}
    </ul>   
    `
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      options: [
        'primary',
        'secondary',
        'accent',
      ],
      control: 'radio'
    },
    amountOfRadios: {
      control: 'number',
    }
  },
} satisfies Meta<RadioArgs>;

export default meta;

type Story = StoryObj<RadioArgs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Radio: Story = {
  args: {
    label: 'Label',
    variant: 'primary',
    amountOfRadios: 3,
  },
};

