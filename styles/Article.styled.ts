import styled from 'styled-components'

export default styled.article`
    position: relative;
    margin-bottom: calc(2 * var(--general-gap-lg));

    &::after {
        position: absolute;
        content: '';
        height: 5px; width: 100%; bottom: calc(-1 * var(--general-gap-lg));
        background-color: var(--secondary-color);
    }

    &:last-child {
        margin-bottom: 0;

        &::after {
            display: none;
        }
    }

    &:hover {
        & > .slug > a.more {
            opacity: 1;
        }
    }
    
    & > .title,
    & > .slug {
        margin-bottom: var(--general-gap-sm);
        font-size: 1.3em;
        display: grid;
    }
    
    & > .title {
        color: var(--primary-text-color);
    }

    & > .slug {
        grid-template-columns: auto auto;
        justify-content: space-between;
        align-items: center;
        gap: var(--gap-hf);

        & > a {
            color: var(--primary-text-color);

            &.title {
                span {
                    transition: box-shadow 300ms ease-out;
                }
            }

            &.more {
                display: flex;
                align-items: center;
                transition: opacity 200ms ease-out;
                opacity: 0;
                font-size: .75em;
                font-weight: 400;

                & > * {
                    margin-left: 2px;
                }

                &:focus {
                    opacity: 1;
                }
            }

            &:hover {
                &.title {
                    span {
                        box-shadow: var(--underline);
                    }
                }
            }
        }
    }

    & > .date {
        margin-bottom: var(--general-gap);
        font-weight: 700;
        color: var(--primary-text-color-transparent);
        font-size: 0.95em;
    }

    & > .description {
        font-size: 1.1em;

        p {
            text-align: justify;
        }
    }
    
    & > .content {
        font-size: 1.05em;

        a {
            color: var(--primary-text-color);
            transition: box-shadow 300ms ease-out;
            box-shadow: 0 -2px 0 0 var(--primary-text-color-transparent) inset, 
                        0 -3px 0 0 transparent inset;

            &:hover {
                box-shadow: var(--underline);
            }
        }

        p {
            text-align: justify;
            margin-bottom: var(--general-gap-md);
            position: relative;
        }
        
        p > img,
        .image-container > img {
            display: block; margin: var(--general-gap-lg) auto;
            max-width: 350px; max-height: 350px;
            object-fit: cover;
            box-shadow: var(--box-shadow);
        }
        
        .image-container {
            display: flex;
            justify-content: space-between;
            background-color: var(--secondary-color);
            border: 1 solid var(--primary-text-color-transparent);
            border-radius: var(--border-radius);
            margin: var(--general-gap-lg) 0;
        }
        
        ul {
            list-style-position: inside;
        }
    }
`