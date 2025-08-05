import type { Meta, StoryObj } from '@storybook/nextjs';
// Action handler for demo purposes
const mockOnYearChange = () => {};
import YearControls from './YearControls';

const meta: Meta<typeof YearControls> = {
  title: 'Components/YearControls',
  component: YearControls,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Navigation controls for year selection and playback.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    onYearChange: { action: 'year-changed' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  currentYear: 2020,
  onYearChange: mockOnYearChange
};

export const Default: Story = {
  args: defaultArgs
};

export const FirstYear: Story = {
  args: {
    ...defaultArgs,
    currentYear: 2015
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the controls when at the first year - previous button is disabled.'
      }
    }
  }
};

export const LastYear: Story = {
  args: {
    ...defaultArgs,
    currentYear: 2023
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the controls when at the last year - next button is disabled.'
      }
    }
  }
};

export const FewYears: Story = {
  args: {
    years: [2020, 2021, 2022],
    currentYear: 2021,
    onYearChange: mockOnYearChange
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the controls with a smaller range of years.'
      }
    }
  }
};

export const SingleYear: Story = {
  args: {
    years: [2023],
    currentYear: 2023,
    onYearChange: mockOnYearChange
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how the component handles a single year - both navigation buttons are disabled.'
      }
    }
  }
};

export const Interactive: Story = {
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with play/pause and navigation controls.'
      }
    }
  }
};