import styled from 'styled-components'

export default styled.div`
  display: grid;
  gap: var(--ctk-general-gap);
  min-width: 380px;
`

const LoginDialogHeader = styled.div`
  p {
      margin-right: var(--ctk-general-gap);
      color: var(--ctk-primary-text-color-darker);
      font-family: var(--ctk-secondary-font);
  }
`;

const LoginDialogFooter = styled.div`
  button {
      background-color: var(--ctk-primary-text-color);
      margin-right: 0 !important;
      
      &:enabled:hover { 
        background-color: var(--ctk-primary-text-color-darker);
      }
  }
`;

export { LoginDialogHeader, LoginDialogFooter };
