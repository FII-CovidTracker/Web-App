import React, { FC } from 'react'
import Styles from '../styles/Burger.styled'

const Burger: FC<{ active: boolean }> = ({ active }) => (
    <Styles className={`burger${active ? ' active' : ''}`} />
)

export default Burger