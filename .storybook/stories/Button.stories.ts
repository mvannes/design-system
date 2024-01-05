import type { StoryObj, Meta } from '@storybook/html';


interface ButtonArgs {
  label: string;
  variant: 'primary' | 'secondary' | 'accent';
  transitioning: boolean;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  tags: ['autodocs'],
  render: (args) => {
    const variant = `button-${args.variant}`;
    const transitioning = args.transitioning ? `button-transitioning` : '';
    return `
    <button class="button ${variant} ${transitioning}">${args.label}</button>`
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
    transitioning: {
      control: 'boolean'
    }
  },
} satisfies Meta<ButtonArgs>;

export default meta;

type Story = StoryObj<ButtonArgs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Button: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    transitioning: false
  },
};

