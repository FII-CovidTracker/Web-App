import styled from 'styled-components'

export default styled.div`
    display: grid;
    margin: var(--general-gap) auto 0 auto;
    grid-template-columns: 1fr auto;
    width: 100%;
    max-width: calc(var(--container-width));
    padding: var(--general-gap);
    padding-bottom: 0;
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

            --max-height: 280px;

            iframe {
                width: 100%; height: var(--max-height);
            }

            .leaflet-container {
                width: 100%; height: var(--max-height);
            }

            & > .container {
                padding: var(--gap-hf);
            }
        }
    }
    
    & > .authority,
    & > .applications {
        display: grid;
        grid-template-columns: auto 180px 1fr 315px;
        grid-column-start: 1; grid-column-end: -1;
        column-gap: var(--general-gap-md);
        margin: calc(-2 * var(--general-gap)) calc(-1 * var(--general-gap)) 0 calc(-1 * var(--general-gap));
        box-shadow: var(--box-shadow-inset);
        align-items: center;
        font-family: var(--secondary-font);
        
        & > div { 
          padding-top: var(--general-gap);
          padding-bottom: var(--general-gap);
        
          &:first-child {
            display: flex;
            place-items: center;
            padding: var(--general-gap); 
            background-color: rgba(255, 255, 255, 0.25);
            margin-top: -1px;
            margin-bottom: -1px;
            height: 100%;
          
            & > * {
              font-size: 2em;
              margin-top: 5px;
            }
          }
          
          &:nth-child(2) {
            font-style: italic;
          }
          
          &:nth-child(3) {
            text-align: left;
            font-size: 95%;
          }
          
          &:last-child {
            padding-right: calc(var(--general-gap) + 5px);
          }
        }
    }
    
    & > .applications {
        background-color: var(--primary-text-color-ultratransparent);
        
        & > div {
          color: var(--primary-text-color-darker);
       
          &:last-child {
            display: flex;
            justify-content: space-between;
            
            img {
              opacity: 0.8;
            }
          }
        }
    }
    
    & > .authority {
        background-color: var(--accent-color);
        
        & > div {
          color: var(--secondary-color-semitransparent);
        
          &:first-child {
            & > * {
              //color: var(--accent-color);
            }
          }
          
          &:last-child {
            & > * {
              width: 100%;
            }
          }
        }
    }
    
    &.main--ro {
      & > .authority,
      & > .applications {
        grid-template-columns: auto 220px 1fr 315px;
      }
    }
   
`