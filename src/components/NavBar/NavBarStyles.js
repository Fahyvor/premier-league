import styled from "styled-components";

export const NavContainer = styled.div`
    background-color: var(--color-bg);
    display: flex;
    flex-direction: row;
    gap: 1rem;
    border: solid rgb(0, 125, 92);
    align-items: center;
    padding-right: 0.7rem;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
`
// export const SearchIcon = styled.image`
//     color: rgb(--color-light);
// `
export const NavSearch = styled.input`
    width: 650px;
    padding: 1rem;
    height: 37px;
    margin-top: 0.1rem;
    margin-left: -1rem;
`
export const NavBtn = styled.button`
    color: white;
    background-color: var(--color-btn);
    width: 150px;
    marting-top: 0.1rem;
    font-size: 22px;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    height: 70px;

`
export const NavDrop = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    padding: 0.5rem;
    margin-left: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const Category = styled.div`
    background-color: var(--color-variant);
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    align-items: center;
    color: white;
    height: 60px;
    width: 150px;
`
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
export const Location = styled.div`
    background-color: var(--color-variant);
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    align-items: center;
    color: white;
    height: 60px;
    width: 150px;
`
export const Delivery = styled.div`
    background-color: var(--color-variant);
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    align-items: center;
    color: white;
    height: 60px;
    width: 150px;
`
// ========================= DROPDOWN ITEMS ====================

export const CatItems = styled.ul`
    display: flex;
    flex-direction: column;
    width: 115px;
    position: absolute;
    overflow: hidden;
    background-color: var(--color-light);
    color: var(--color-black);
    margin-top: 240px;
    padding-left: 1rem;
    padding-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    transform: translateX(-8%);
    gap: 2rem;
    font-weight: 700;
    cursor: pointer;
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
    cursor: pointer;
`
export const LocationItems = styled.ul`
    display: flex;
    flex-direction: column;
    width: 115px;
    position: absolute;
    overflow: hidden;
    background-color: var(--color-light);
    color: var(--color-black);
    margin-top: 200px;
    padding-left: 1rem;
    padding-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    transform: translateX(-8%);
    gap: 2rem;
    font-weight: 700;
    cursor: pointer;
`

// ======================= END OF DESKTOP NAV STYLING =================
export const MobileNav = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: rows;
        padding: 1rem;
        gap: 5rem;
    }
`

export const MobileLogo = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

export const LogoImage = styled.img`

`

export const MobileName = styled.h5`
    color: rgb(146, 146, 146);
    margin-top: 1.5px;
`

export const MobileNavItems = styled.div`
    gap: 0.4rem;
    margin-top: 0.2rem;
    display: flex;
    position: abosolute;
`

export const NavMobile = styled.div`
    cursor: pointer;
    display: flex;
`

export const DropNavItems = styled.div`
    font-size: 1.5rem;
    position: absolute;
    justify-content: right;
    align-items: right;
    gap: 2rem;
    margin-left: -9.5rem;
    margin-top: 3.3rem;
    width: 200px;
    background-color: var(--color-white);
`

export const NavList = styled.li`
    margin-top: 0.5rem;
    list-style: none;
    padding: 1rem;
    text-align: center;
    background-color: var(--color-light);
    font-weight: 700;
`

export const NavCategory = styled.ul`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-text: center;
    background-color: white;
    text-color: var(--color-btn);
    padding: 1rem;
    
`