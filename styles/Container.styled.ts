import styled from 'styled-components'

export default styled.div`
    display: grid;
    margin: var(--general-gap) auto;
    grid-template-columns: 1fr 350px;
    width: 100%;
    max-width: calc(var(--container-width));
    padding: var(--general-gap);
    gap: var(--gap);

    & > .content, & > aside  {
        & > h1 {
            display: flex;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1em;
            color: var(--primary-text-color);

            & > span {
                font-size: 1.1em;
                padding: 10px var(--gap);
                background-color: var(--primary-text-color);
                color: var(--secondary-color);
                border-radius: var(--border-radius) var(--border-radius) 0 0;
            }

            & ~ .section {
                border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);
            }
        }

        & > .section {
            background-color: var(--primary-color);
            box-shadow: var(--box-shadow);
            border-radius: var(--border-radius);
            margin-bottom: var(--general-gap);
        }
    }

    & > .content {
        & > .section {
            padding: var(--gap-md) var(--gap);
        }
    }

    & > .aside {
        & > .section {
            display: grid;
            position: relative;

            --map-height: 280px;

            iframe {
                width: 100%; height: var(--map-height);
            }

            .leaflet-container {
                width: 100%; height: var(--map-height);
            }

            & > .container {
                padding: var(--gap-hf);
            }
        }
    }
`