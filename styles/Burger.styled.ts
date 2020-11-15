import styled from 'styled-components'

export default styled.span`
    position: relative;
    display: block;
    width: var(--burger-line-width);
    transition: background-color 100ms ease-in-out;

    &, &::before, &::after {
        height: var(--burger-line-height);
        background-color: var(--primary-text-color);
    }

    &::before, &::after {
        position: absolute;
        content: '';
        left: calc(-1 * var(--burger-line-difference));
        width: calc(var(--burger-line-width) + var(--burger-line-difference));
        transition:
            transform 200ms ease-in-out,
            top 200ms ease-in-out;
    }

    &::before {
        top: calc(-3 * var(--burger-line-height));
    }

    &::after {
        top: calc(3 * var(--burger-line-height));
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