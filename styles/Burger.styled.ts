import styled from 'styled-components'

export default styled.span`
    position: relative;
    display: block;
    width: var(--ctk-burger-line-width);
    transition: background-color 100ms ease-in-out;

    &, &::before, &::after {
        height: var(--ctk-burger-line-height);
        background-color: var(--ctk-primary-text-color);
    }

    &::before, &::after {
        position: absolute;
        content: '';
        left: calc(-1 * var(--ctk-burger-line-difference));
        width: calc(var(--ctk-burger-line-width) + var(--ctk-burger-line-difference));
        transition:
            transform 200ms ease-in-out,
            top 200ms ease-in-out;
    }

    &::before {
        top: calc(-3 * var(--ctk-burger-line-height));
    }

    &::after {
        top: calc(3 * var(--ctk-burger-line-height));
    }

    &.active {
        background-color: transparent;

        &::before, &::after {
            top: 0;
        }

        &::before {
            transform: rotate(-45deg);
        }

        &::after {
            transform: rotate(45deg);
        }
    }
`