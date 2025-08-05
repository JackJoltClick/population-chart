import type { Meta, StoryObj } from '@storybook/nextjs';
import PopulationChart from './PopulationChart';

const meta: Meta<typeof PopulationChart> = {
  title: 'Components/PopulationChart',
  component: PopulationChart,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The main population chart component that combines the bar chart visualization with year controls.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxCountries: 15
  },
  parameters: {
    docs: {
      description: {
        story: 'The complete population chart showing the top 15 countries with navigation controls.'
      }
    }
  }
};

export const Top10Countries: Story = {
  args: {
    maxCountries: 10
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows only the top 10 countries for a more compact view.'
      }
    }
  }
};

export const Top5Countries: Story = {
  args: {
    maxCountries: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'A minimal view showing just the top 5 countries.'
      }
    }
  }
};

export const Interactive: Story = {
  args: {
    maxCountries: 15
  },
  parameters: {
    docs: {
      description: {
        story: 'Try using the year navigation controls - click previous/next buttons, select from dropdown, or use the play button to auto-advance through years.'
      }
    }
  }
};