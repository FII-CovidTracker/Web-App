import styled from 'styled-components'

export default styled.footer`
    padding-bottom: var(--general-gap-lg);

    & .container {
        width: 100%; height: 100%;
        max-width: var(--container-width);
        margin: 0 auto;
        padding: calc(5px + var(--general-gap)) var(--general-gap) var(--general-gap) var(--general-gap);
        box-shadow: var(--box-shadow-inset);
        background-color: var(--primary-color);
        
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: var(--general-gap);
        border-radius: 2px;
        
        a {
            padding-bottom: 5px;
            transition: box-shadow 150ms ease-out;
            
            &:hover {
              box-shadow: var(--underline);
            }
        }
        
        div:nth-child(1) {
            .dots {
              display: flex;
              gap: 30px;
              font-family: var(--secondary-font);
              font-size: 105%;
    
              & > * {
                position: relative;
                color: var(--accent-color);
              
                &:last-child:after { display: none; };
              
                &:after {
                    user-select: none;
                    position: absolute;
                    display: flex; place-content: center;
                    content: '•';
                    color: var(--accent-color-transparent);
                    width: 30px;
                    top: 0; left: 100%;
                }
              }
            }
        }
        
        div:nth-child(2) {
            display: flex;
            align-items: center;
            justify-self: center;
            color: var(--forth-color);
            
            span {
                padding-bottom: 5px;
            }
            
            svg {
                margin: 0 3px;
                animation: heartbeat 1s infinite;
                color: #E91E63;
                font-size: 128%;
            }
            
            a {
                margin-left: 3px;
                color: var(--accent-color);
            }
        }   
        
        div:nth-child(3) {
            justify-self: end;
            font-family: var(--secondary-font);

            a {
                display: flex;
                align-items: center;
                gap: var(--general-gap-md);
                font-size: 95%;
                color: var(--primary-text-color);
                
                svg {
                    margin-top: 4px;
                    font-size: 90%;
                }
                
                span {
                    font-size: 105%;
                }
            }
        }   
    }
    
    @keyframes heartbeat {
      0% {
        transform: scale(0.75);
      }
      20% {
        transform: scale(1);
      }
      40% {
        transform: scale(0.75);
      }
      60% {
        transform: scale(1);
      }
      80% {
        transform: scale(0.75);
      }
      100% {
        transform: scale(0.75);
      }
    }
`

