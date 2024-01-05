import type { StoryObj, Meta } from '@storybook/html';

interface InputArgs {
  label: string;
  placeholder: string;
  variant: 'primary' | 'secondary' | 'accent';
  error: boolean;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Input',
  tags: ['autodocs'],
  render: (args) => {
    const variant = `form-${args.variant}`;
    const errored = args.error ? 'error' : '';

    return `
    <div class="form ${variant}">
        <div class="input-holder ${errored}">
          <label for="input">${args.label}</label>
          <input type="text" name="input" id="input" placeholder="${args.placeholder}">
        </div>
    </div>   
    `
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    variant: {
      options: [
        'primary',
        'secondary',
        'accent',
      ],
      control: 'radio'
    },
    error: {
      control: 'boolean'
    }
  },
} satisfies Meta<InputArgs>;

export default meta;

type Story = StoryObj<InputArgs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    variant: 'primary',
    error: false,
  },
};

