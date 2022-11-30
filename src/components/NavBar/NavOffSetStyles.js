import styled from "styled-components";

export const OffSetContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    color: rgb(146, 146, 146);
    padding-left: 1rem;

    @media screen and (max-width: 768px) {
        margin-top: -3rem;
    }
`
export const School = styled.h4`
    align-items: center;
    letter-spacing: 0.2rem;
`