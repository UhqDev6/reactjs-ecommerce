import styledComponents from 'styled-components';
export const ButtonContainer = styledComponents.button`
text-transform: capitalize;
font-size: 1rem;
border: none;
background: var(--mainBlue);
color: var(--mainWhite);
border-radius: 1rem;
border: 0.05rem solid var(--mainBlue);
padding: 0.5rem;
margin-left: 0.5rem;
&:hover {
    background: var(--mainWhite);
    color: var(--mainBlue);
    padding: 0.5rem;
    border-radius: 1rem;
}
`;