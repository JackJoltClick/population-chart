import type { Meta, StoryObj } from '@storybook/nextjs';
import SimpleBarChart from './SimpleBarChart';
import { CountryPopulation } from '@/data/populationData';

const meta: Meta<typeof SimpleBarChart> = {
  title: 'Components/SimpleBarChart',
  component: SimpleBarChart,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A racing bar chart that displays countries ranked by population with smooth animations.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const sampleData: CountryPopulation[] = [
  { country: 'China', code: 'CN', population: 1439, year: 2023 },
  { country: 'India', code: 'IN', population: 1380, year: 2023 },
  { country: 'United States', code: 'US', population: 331, year: 2023 },
  { country: 'Indonesia', code: 'ID', population: 273, year: 2023 },
  { country: 'Pakistan', code: 'PK', population: 220, year: 2023 },
  { country: 'Brazil', code: 'BR', population: 212, year: 2023 },
  { country: 'Nigeria', code: 'NG', population: 206, year: 2023 },
  { country: 'Bangladesh', code: 'BD', population: 164, year: 2023 },
];

const smallData: CountryPopulation[] = [
  { country: 'China', code: 'CN', population: 1439, year: 2023 },
  { country: 'India', code: 'IN', population: 1380, year: 2023 },
  { country: 'United States', code: 'US', population: 331, year: 2023 },
];

export const Default: Story = {
  args: {
    data: sampleData,
    maxItems: 15
  }
};

export const Top5Countries: Story = {
  args: {
    data: sampleData,
    maxItems: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows only the top 5 countries by population.'
      }
    }
  }
};

export const Top3Countries: Story = {
  args: {
    data: smallData,
    maxItems: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'A minimal version showing just the top 3 countries.'
      }
    }
  }
};

export const EmptyData: Story = {
  args: {
    data: [],
    maxItems: 15
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how the component handles empty data gracefully.'
      }
    }
  }
};

export const SingleCountry: Story = {
  args: {
    data: [{ country: 'China', code: 'CN', population: 1439, year: 2023 }],
    maxItems: 15
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the component with just one country.'
      }
    }
  }
};