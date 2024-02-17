import React from 'react'
import { Card } from '../ui/card'

type CardProps = React.ComponentProps<typeof Card>;
type CustomCardProps = CardProps & {
  cardHeader?: React.ReactNode,
  cardContent?: React.ReactNode,
  cardFooter?: React.ReactNode,
};

const CustomCard: React.FC<CustomCardProps> = ({ className, cardHeader, cardContent, cardFooter, ...props }) => {
  return (
    <div>CustomCard</div>
  )
}

export default CustomCard