'use client';
import styled from 'styled-components';

export default function Page() {
  return (
    <div>
      <Flex>
        <Title>Hello Styled Components</Title>
        <Description>
          This is small description support you see if Styled Components is Work
          Right
        </Description>

        <Description>Styled Components have been configured!!!</Description>

        <Button onClick={() => alert('Hello I`m Styled Button')}>
          Hello I`m Styled Button
        </Button>
      </Flex>
    </div>
  );
}

const Title = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Description = styled.div`
  color: orange;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Button = styled.button`
  width: fit-content;
  background-color: ${(theme) => theme.theme.color.primary};
  padding: ${({ theme }) => theme.spacing.sp8};
  border-radius: ${({ theme }) => theme.radius.r12};
  color: ${({ theme }) => theme.color.white};
`;
