import styled from "styled-components";

export const HeaderContainer = styled.header`
    border-bottom: 1px solid var(--color-gray);
    display: flex;
    justify-content: space-between;
    padding: 15px;

    h1 {
        font-size: 22px;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        width: 150px;
    }
`;