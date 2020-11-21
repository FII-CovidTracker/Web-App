import styled from 'styled-components'

export default styled.div`
    position: relative;
    overflow: hidden;
    width: 100%; height: 30vw; max-height: 400px;

    & .background {
        position: absolute;
    }

    & .container {
        position: absolute; height: 100%;
        width: 100%; left: 50%; transform: translateX(-50%);
        max-width: var(--container-width);
        display: grid;
        align-content: center;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
    }
    
    &.image {
        & .background {
            --filter-margin: -10px;
            left: var(--filter-margin); top: var(--filter-margin); right: var(--filter-margin); bottom: var(--filter-margin);
            background-image: url("/assets/banner/background.png");
            background-size: cover;
            background-position: right bottom;
            filter: blur(4px) saturate(120%);
            
            &::after {
                position: absolute;
                content: '';
                left: 0; top: 0; right: 0; bottom: 0;
                background-color: var(--primary-text-color-transparent);
            }
        }
        
        & .container {
            padding: var(--general-gap);
            gap: var(--general-gap);
            grid-template-columns: 1fr auto;
            
            & .text,
            & .preview {
                height: 20vw; max-height: 298px;
            }
            
            & .text {
                color: var(--secondary-color);
                display: grid;
                align-content: center;
            
                h1 {
                    margin: -1em 0 var(--general-gap) 0;
                    position: relative;
                    font-size: 2em;
                    font-weight: 600;
                    font-style: italic;
                    color: var(--secondary-color);
            
                    &::after {
                        position: absolute;
                        content: '';
                        bottom: calc(-1 * var(--general-gap-hf)); left: 0;
                        width: 35px; height: 3px;
                        background-color: var(--secondary-color-transparent);
                    }
                }
            
                p {
                    font-size: 1.1em;
                    max-width: calc(var(--container-width) * 0.6);
                }
            }
        
            & .preview {
                width: 27vw; max-width: 402px;
                background-color: white;
                overflow: hidden;
                text-align: center;
                box-shadow: 0 0 10px rgba(0, 0, 0, .25);
                border-radius: var(--border-radius);
            
                img {
                    height: 100%;
                }
            }
        }
    }
    
    &.video {
        &,
        & .container iframe,
        & .container video {
            height: 56vw;
            max-height: 500px;
        }

        & .background {
            position: absolute;
            content: '';
            left: 0; top: 0; right: 0; bottom: 0;
            background-color: var(--banner-video-background-color);
        }
      
        & .container {
            grid-template-columns: 1fr;
            gap: 0;
            
            & iframe, & video {
                width: 100%;
            }
        }
    }
    
    &.intro {
      & .container {
        padding-top: var(--general-gap-lg);
        background-color: var(--primary-text-color-border);
        display: flex;
        justify-content: center;
        
        svg {
            height: 55vw;
            max-height: 781px;
        }
      }
    }
`