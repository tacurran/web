import React from 'react'
import * as styles from './molecule-feature-icon.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const MoleculeFeatureIcon = ({ children, className }: PropTypes) => (
  <div className={cn(styles.moleculeFeatureIcon)}>{children}</div>
)

export default MoleculeFeatureIcon
