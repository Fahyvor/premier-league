import styled from "styled-components";

export const ProgramLevel = styled.div`
    background-color: var(--color-variant);
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    align-items: center;
    color: white;
    height: 60px;
    width: 200px;
`

export const ProgItems = styled.ul`
    display: flex;
    flex-direction: column;
    width: 160px;
    position: absolute;
    overflow: hidden;
    background-color: var(--color-light);
    color: var(--color-black);
    margin-top: 240px;
    padding-left: 1rem;
    padding-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    transform: translateX(-5%);
    gap: 2rem;
    font-weight: 700;
`