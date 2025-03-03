import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styled from "styled-components/native";
import Logo from "../../assets/logo.svg";

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Input = styled(TextInput)`
  width: 80%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const SigninWithEmail = () => {
  return (
    <Container>
      <Logo width={130} height={30} />
      <Text>로그인</Text>
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" secureTextEntry />
      <Button
        title="로그인하기"
        onPress={() => console.log("로그인 버튼 클릭됨")}
      />
    </Container>
  );
};

export default SigninWithEmail;
