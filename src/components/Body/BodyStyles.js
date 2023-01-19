import styled from "styled-components";

export const BodyContainer = styled.div`
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        // max-width: 340px;
        margin-top: -1.2rem;
    }
`
export const LeftSide = styled.div`
    width: 850px;
    background-color: var(--color-white);
    border-radius: 0.2rem;
    margin: 0.8rem;

    @media screen and (max-width: 768px) {
      width: 100%;
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
        gap: 5%;
        padding: 3%;
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
        font-size: 0.8rem;
        margin-top: -1rem;
        padding-left: 1rem;
    }
`
export const UniversityLogo = styled.img`
    width: 50px;    
    aspect-ratio: 1\1;

    @media screen and (max-width: 768px) {
        width: 20px;
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
    }
`

export const BodyNav = styled.div`
    display: flex;
    gap: 12rem;
    justify-content: space-around;
    
    @media screen and (max-width: 768px) {
        gap: 1rem;
        margin-top: -1.8rem;
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
    @media screen and (max-width: 768px) {
        margin-top: -0.8rem;
    }
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
        margin-top: -0.5rem;
    }
`

export const Student = styled.img`
    padding-top: 1rem;
    justify-content: space-around;
    align-items: center;
    width: 835px;
    height: 520px;

    @media screen and (max-width: 768px) {
        width: 300px;
        height: 190px; 
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
        font-weight: 700;
        font-size: 1.4rem;
        padding-left: 0.8rem;
        padding-bottom: 0.8rem;
    }
`

export const AboutInformation = styled.p`
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    line-height: 2rem;
    color: rgb(66, 66, 66);

    @media screen and (max-width: 768px) {
        letter-spacing: 0.5px;
        line-height: 1.8rem;
        padding: 0.8rem;
        margin-top: -1.5rem;
        text-align: justify;
    }
`


// ==================== END OF LEFT SIDE=========================

export const RightSide = styled.div`
    width: 350px;
    border-radius: 1rem;
    background-color: var(--color-white);
    padding: 2rem;

    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 5%;
    }
`
export const Message = styled.div`
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const MessageHead = styled.h3`
    font-size: 1.5rem;
`

export const MessageInformation = styled.p`
    text-align: justify;

    @media screen and (max-width: 600px) {
        text-justify: inter-word;
    }
`

export const RequestForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media screen and (max-width: 768px) {
        gap: 25px;
        margin: 8px, 2px;
        width: 90%;
    }
`

export const First = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
        height: 50px;
        width: 100%;
        margin-bottom: 20px;
    }
`

export const Last = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
        height: 50px;
        width: 100%;
        margin-bottom: 20px;
    }
`

export const Mail = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
        height: 50px;
        width: 100%;
        margin-bottom: 20px;
    }
`

export const Phone = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
        height: 50px;
        width: 100%;
        margin-bottom: 20px;
    }
`

export const Address = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
        height: 50px;
        width: 100%;
        margin-bottom: 20px;
    }
`

export const Question = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
        height: 50px;
        width: 100%;
        margin-bottom: 20px;
    }
`

export const ProgramChoice = styled.input`
    height: 40px;
    background-color: var(--color-light);
    box-shadow: 2px solid rgba(0,0,0,0,0.06);
    border-radius: 0.5rem;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
        height: 50px;
        width: 100%;
        margin-bottom: 20px;
    }
`

export const Agreement = styled.p`
    text-align: justify;
    width: 200px;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
    }
`

export const Submit = styled.button`
    background-color: var(--color-btn);
    color: white;
    width: 100px;
    height: 50px;
    font-size: 1rem;
    margin-left: 15rem;
    border: 0px solid;

    @media screen and (max-width: 768px) {
        margin-left: 70%;
    }
`