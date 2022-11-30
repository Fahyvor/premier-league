import React from 'react'
import {  BodyContainer,
          Name,
          UniversityName,
          NameofSchool,
          UniversityLogo,
          BodyNav,
          BodyNavWriteUp,
          BodyNavBtnDrop,
          Chat,
          Programs,
          More,
          Contact,
          LeftSide,
          Student,
          UniversityAbout,
          AboutName,
          AboutInformation,
          RightSide,
          Message,
          MessageHead,
          MessageInformation,
          RequestForm,
          First,
          Last,
          Mail,
          Phone,
          Address,
          Question,
          ProgramChoice,
          Agreement,
          Submit } from './BodyStyles'
import { AiOutlineCaretDown, AiOutlineCheckSquare } from 'react-icons/ai'
import manchester from '../../assets/manchester-logo.png'
import student from '../../assets/Student.jpeg'

const Body = () => {
  return (
    <BodyContainer>
      <LeftSide>
      <Name>
        <UniversityName>
          The University of Manchester
        </UniversityName>
        <NameofSchool>
        <UniversityLogo src={manchester}  />
        The University of Manchester
        </NameofSchool>
      </Name>

      <BodyNav>
        <BodyNavWriteUp>
          <Chat>
            Chat with students
          </Chat>
          <Programs>
            Programs
          </Programs>
        </BodyNavWriteUp>
        <BodyNavBtnDrop>
          <More>
            <AiOutlineCaretDown />
            <h4>More</h4>
          </More>
          <Contact>Contact school</Contact>
        </BodyNavBtnDrop>
      </BodyNav>
      <Student src={student} />
      <UniversityAbout>
        <AboutName>
          The Univeristy of Manchester
        </AboutName>
        <AboutInformation>
          Part of the prestigious Russel Group of universities,
          The University of Manchester is recognised across the globe for its research around
          teaching quality, covering undergraduate and postgraduates programs, as
          well as specially designed online and blended learning courses to allow
          students study from wherever they are based.
        </AboutInformation>
      </UniversityAbout>
      </LeftSide>

      {/* ==================== END OF LEFTSIDE ==================== */}

      <RightSide>
        <Message>
          <MessageHead>Message the school</MessageHead>
          <MessageInformation>
            Want to get more information about this institute and its
            programs? Fill out the following form and we'll pass it on directly
            to a representative fro the school, who will respond to your
            enquirty.
          </MessageInformation>
        </Message>
        <RequestForm>
          <First defaultType='First Name' placeholder='First Name' type='text' />
          <Last defaultType='Last Name' placeholder='Last Name' type='text' />
          <Mail defaultType='Email' placeholder='Email' type='text' />
          <Phone defaultType='@phone' placeholder='Phone Number' type='text' />
          <Address defaultType='address' placeholder='Currently living in' type='text' />
          <Question defaultType='question' placeholder='Please write your question here' type='text' />
          <ProgramChoice defaultType='Choice' placeholder='Choose a program' type='text' />
          <Agreement> <AiOutlineCheckSquare size={22}/> I accept the <u>Terms and Conditions</u> & <u>Privacy Policy</u></Agreement>
          <Submit>Submit</Submit>
        </RequestForm>

      </RightSide>
    </BodyContainer>
  );
}

export default Body;