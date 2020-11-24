import styled from 'styled-components'

export default styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr auto;
    width: 100%;
    max-width: var(--ctk-container-width);
    min-height: var(--ctk-container-min-height);
    padding: var(--ctk-general-gap);
    padding-bottom: 0;
    gap: var(--ctk-gap);
    background-color: var(--ctk-primary-color);
    box-shadow: var(--ctk-box-shadow);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    overflow: hidden;

    & > .content, & > aside  {
        & > h1 {
            display: flex;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1em;
            color: var(--ctk-primary-text-color);

            & > span {
                font-size: 1.1em;
                padding: 10px var(--ctk-gap);
                background-color: var(--ctk-primary-text-color);
                color: var(--ctk-secondary-color);
                border-radius: var(--ctk-border-radius) var(--ctk-border-radius) 0 0;
            }

            & ~ .section {
                border-radius: 0 var(--ctk-border-radius) var(--ctk-border-radius) var(--ctk-border-radius);
            }
        }

        & > .section {
            background-color: var(--ctk-primary-color);
            box-shadow: var(--ctk-box-shadow);
            border-radius: var(--ctk-border-radius);
            margin-bottom: var(--ctk-general-gap);
        }
    }

    & > .content {
        & > .section {
            padding: var(--ctk-gap-md) var(--ctk-gap);
        }
    }

    & > .aside {
        & > .section {
            display: grid;
            position: relative;

            --max-height: 280px;

            iframe {
                width: 100%; height: var(--ctk-max-height);
            }

            .leaflet-container {
                width: 100%; height: var(--ctk-max-height);
            }

            & > .container {
                padding: var(--ctk-gap-hf);
            }
        }
    }
    
    & > .authority,
    & > .applications {
        display: grid;
        grid-template-columns: auto 180px 1fr 315px;
        grid-column-start: 1; grid-column-end: -1;
        column-gap: var(--ctk-general-gap-md);
        margin: calc(-1 * var(--ctk-general-gap)) calc(-1 * var(--ctk-general-gap)) 0 calc(-1 * var(--ctk-general-gap));
        box-shadow: var(--ctk-box-shadow-inset);
        align-items: center;
        font-family: var(--ctk-secondary-font);
        border-radius: 2px;
        
        & > div { 
          padding-top: var(--ctk-general-gap);
          padding-bottom: var(--ctk-general-gap);
        
          &:first-child {
            display: flex;
            place-items: center;
            padding: var(--ctk-general-gap); 
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
            padding-right: calc(var(--ctk-general-gap) + 5px);
          }
        }
    }
    
    & > .applications {
        background-color: var(--ctk-primary-text-color-ultratransparent);
        
        & > div {
          color: var(--ctk-primary-text-color-darker);
       
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
        background-color: var(--ctk-accent-color);
        
        & > div {
          color: var(--ctk-secondary-color-semitransparent);
        
          &:last-child {
            margin: 0 1px;
          
            & button {
              display: grid;
              grid-template-columns: 1fr auto;
              padding: 0 var(--ctk-general-gap-md);
              height: 43px;
              width: 100%;
              color: var(--ctk-secondary-color);
              border-color: var(--ctk-secondary-color-transparent);
              border-width: 2px;
              font-size: 110%;
              font-weight: 600;
              transition: all 150ms ease-in-out;
              
              &:hover {
                box-shadow: var(--ctk-box-shadow);
                color: var(--ctk-accent-color);
                background-color: var(--ctk-secondary-color-semitransparent);
              }
              
              span:first-child {
                text-align: left;
              }
            }
          }
        }
    }
    
    &.main--home {
      margin: var(--ctk-general-gap) auto 0 auto;
      min-height: 0;
      background-color: transparent;
      box-shadow: none;
    }
    
    &.main--locale-ro {
      & > .authority,
      & > .applications {
        grid-template-columns: auto 220px 1fr 315px;
      }
    }
   
`