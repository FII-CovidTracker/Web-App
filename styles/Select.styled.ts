import styled from 'styled-components'

const OptionLanguageStyle = styled.span`
    display: flex;
    align-items: center;
    gap: var(--ctk-general-gap-hf);
    padding: 8px 12px;
    border-radius: 0;
    
    &.active {
        cursor: default;
        border-radius: var(--ctk-border-radius);
    }
    
    & > img {
      height: 22px;
    }
    & > span {
        font-weight: 600;
        font-size: .96em;
        color: var(--ctk-primary-text-color-darker);
    }
`

const SelectLanguageStyle = styled.div`   
    position: relative;
    
    & > .options {
        position: absolute;
        overflow: hidden;
        opacity: 0; height: 0; 
        left: 0; right: 0;
        border-bottom-left-radius: var(--ctk-border-radius);
        border-bottom-right-radius: var(--ctk-border-radius);
        
        & > a {
            display: block;
            color: var(--ctk-primary-text-color-darker);

            &:hover,
            &:focus {
                outline: 0;
                background-color: var(--ctk-third-color);
            }
        }
    }
    
    & > .active,
    & > .options > * {
      background-color: var(--ctk-secondary-color);
      
    }
    
    &.active,
    &:hover {
        box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.15);
        
        & > .active {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
        
        & > .options {
          opacity: 1; height: auto;
        }
    }
`

export { OptionLanguageStyle, SelectLanguageStyle }
