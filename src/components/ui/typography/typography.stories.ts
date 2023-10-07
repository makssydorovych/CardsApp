import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'
const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
        'error',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h3',
  },
}

export const Body1: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'body1',
  },
}

export const Body2: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'body2',
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'subtitle1',
  },
}

export const Subtitle2: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'overline',
  },
}

export const Link1: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'link2',
  },
}

export const Error: Story = {
  args: {
    children: 'Carosserie Test ZürichStauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'error',
  },
}
