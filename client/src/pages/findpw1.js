import React from 'react'
import { 
    Container1, 
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    TextContainer
} from './signElement'

const FindPW1 = () => {
    return (
        <>
            <Container1>
                <FormWrap>
                    <Icon to="/">Study Joa</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>비밀번호 찾기</FormH1>
                            <FormLabel htmFor='for'>ID</FormLabel>
                            <FormInput type='ID' required/> 
                            <FormLabel htmFor='for'>이름</FormLabel>
                            <FormInput type='name' required/>
                            <FormLabel htmFor='for'>휴대폰 번호</FormLabel>
                            <FormInput type='phone' required/>
                            <FormButton type='submit'>비밀번호 찾기</FormButton>
                            <TextContainer>
                             <Text to="findid">ID 찾기</Text>
                             <Text to="login">로그인 화면으로 이동</Text>
                             </TextContainer>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container1>
        </>
    )
}

export default FindPW1
