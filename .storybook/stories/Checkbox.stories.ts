import type { StoryObj, Meta } from '@storybook/html';


interface CheckboxArgs {
  label: string;
  variant: 'primary' | 'secondary' | 'accent';
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Checkbox',
  tags: ['autodocs'],
  render: (args) => {
    const variant = `checkbox-${args.variant}`;
    return `
    <div class="checkbox ${variant}">
        <input type="checkbox" name="check" id="check" />
        <label for="check">${args.label}</label>
    </div>
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
    }
  },
} satisfies Meta<CheckboxArgs>;

export default meta;

type Story = StoryObj<CheckboxArgs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Checkbox: Story = {
  args: {
    label: 'Label',
    variant: 'primary'
  },
};

