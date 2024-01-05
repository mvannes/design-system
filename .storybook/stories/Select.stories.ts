import type { StoryObj, Meta } from '@storybook/html';


interface SelectArgs {
  label: string;
  variant: 'primary' | 'secondary' | 'accent';
  amountOfOptions: number;
  error: boolean;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Select',
  tags: ['autodocs'],
  render: (args) => {
    const variant = `form-${args.variant}`;
    const errored = args.error ? 'error' : '';
    const options = [];

    for (let i =0; i < args.amountOfOptions; i++) {
      options.push(`
        <option value="${i}">${args.label} ${i}</option>`)
    }
    return `
    <div class="form ${variant}">
        <div class="input-holder select-holder ${errored}">
          <label for="select">Select</label>
          <select name="select" id="select">
            ${options.join('\n')}
          </select>
          <i class="select-icon"></i>
        </div>
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
    },
    amountOfOptions: {
      control: 'number',
    },
    error: {
      control: 'boolean'
    }
  },
} satisfies Meta<SelectArgs>;

export default meta;

type Story = StoryObj<SelectArgs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Radio: Story = {
  args: {
    label: 'Label',
    variant: 'primary',
    amountOfOptions: 3,
    error: false,
  },
};

