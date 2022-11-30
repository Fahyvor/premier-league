import styled from "styled-components";

export const HeadContainer = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const MainLogo = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 0.3rem;
    gap: 0.5rem;
    color: rgb(195, 195, 195);
    font-family: Arial;
    justify-content: right;
    padding-right: 20px;

    @media screen and (max-width: 1024px) {
        
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const Text = styled.h4`
    margin-top: 0.35rem;
`
export const CountryLogo = styled.img`
    border: 7px solid rgb(195, 195, 195);
    width: 20px;
    height: 20px;
    aspect-ratio: 1/1;

    @media screen and (max-width: 1024px) {
        width: 15px;
        height: 10px;
        border: 5px solid(195, 195, 195);
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const LogoItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 38rem;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 0.5rem;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0.4rem;
    }
`
export const HeadLogo = styled.img`
    height: 60px;
    width: 280px;
    padding-left: 20px;
    margin-top: -60px;
`
export const HeadItems = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    font-family: Arial;

    @media screen and (max-width: 1024px) {
        // display: flex;
        // flex-direction: column;
        // width: 200px;
        // grid-template-columns: repeat(1fr, 3);
        // align-items: center;
        // justify-content: center;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`