import styled from "styled-components";

export const BodyContainer = styled.div`
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 700px;
        margin-top: -1.2rem;
    }
`
export const LeftSide = styled.div`
    width: 850px;
    background-color: var(--color-white);
    border-radius: 0.2rem;
    margin: 0.8rem;

    @media screen and (max-width: 768px) {
      width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 0.05rem;  
    }
`

export const Name = styled.div`
    display: flex;
    gap: 250px;
    justify-content: space-around;
    align-items: center;
    margin-top: -1rem;

    @media screen and (max-width: 768px) {
        gap: 50px;
        padding: 5px;
    }
`

export const UniversityName = styled.h2`
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-decoration-thickness: from-font;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 0.2rem;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        margin-top: -1rem;
        padding-left: 1rem;
    }
`
export const UniversityLogo = styled.img`
    width: 50px;    
    aspect-ratio: 1\1;

    @media screen and (max-width: 768px) {
        width: 25px;
        margin-left: 100px;
    }
`

export const NameofSchool = styled.h6`
    font-weight: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    color: var(--color-bg-variant);

    @media screen and (max-width: 768px) {
        margin-top: 1.5rem;
        padding-right: 1.2rem;
    }
`

export const BodyNav = styled.div`
    display: flex;
    gap: 12rem;
    justify-content: space-around;
    
    @media screen and (max-width: 768px) {
        gap: 4rem;
    }
`

export const BodyNavWriteUp = styled.div`
    color: rgb(46, 46, 46);
    display: flex;
    gap: 3rem;
    padding-left: 1rem;

    @media screen and (max-width: 768px) {
        gap: 0rem;
        flex-direction: column;
        padding-left: 0.5rem;
    }
`

export const Chat = styled.h4`

`

export const Programs = styled.h4`

`

export const BodyNavBtnDrop = styled.div`
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        gap: 0.1rem;
        flex-direction: column;
        align-items: center;
        padding-right: 0.5rem;
    }
`

export const More = styled.div`
    display: flex;
    gap: 0.2rem;
    align-items: center;
`
export const Contact = styled.button`
    color: white;
    background-color: var(--color-btn);
    font-weight: 800;
    width: 250px;
    letter-spacing: 0.05rem;
    font-size: 0.9rem;
    cursor: pointer;
    border-raidus: 1rem;
    border: none;

    @media screen and (max-width: 768px) {
        width: 100px;
        font-weight: 500;
        font-size: 0.7rem;
        height: 40px;
    }
`

export const Student = styled.img`
    padding-top: 1rem;
    justify-content: space-around;
    align-items: center;
    width: 835px;
    height: 520px;

    @media screen and (max-width: 768px) {
        width: 380px;
        height: 220px; 
        align-items: center;
        justify-content: center;
    }
`

export const UniversityAbout = styled.div`

`

export const AboutName = styled.h2`
    font-weight: 500;
    font-size: 2.2rem;
    color: rgb(66, 66, 66);

    @media screen and (max-width: 768px) {
        font-weight: 500;
        font-size: 2rem;
        padding-left: 0.8rem;
    }
`

export const AboutInformation = styled.p`
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    line-height: 2rem;
    color: rgb(66, 66, 66);

    @media screen and (max-width: 768px) {
        letter-spacing: none;
        line-height: 1.5rem;
        padding: 0.8rem;
        margin-top: -1.5rem;
    }
`


// ==================== END OF LEFT SIDE=========================

export const RightSide = styled.div`
    width: 350px;
    border-radius: 1rem;
    background-color: var(--color-white);
    padding: 2rem;

    @media screen and (max-width: 768px) {
        width: 320px;
        margin-left: 0.5rem;
    }
`
export const Message = styled.div`

`

export const MessageHead = styled.h3`
    font-size: 1.5rem;
`

export const MessageInformation = styled.p`

`

export const RequestForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const First = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;
`

export const Last = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;
`

export const Mail = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;
`

export const Phone = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;
`

export const Address = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;
`

export const Question = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;
`

export const ProgramChoice = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;
`

export const Agreement = styled.p`
    text-align: justify;
    width: 200px;
`

export const Submit = styled.button`
    background-color: var(--color-btn);
    color: white;
    width: 100px;
    height: 50px;
    font-size: 1rem;
    margin-left: 15rem;
    border: 0px solid;
`