'use client';

import styled from 'styled-components';
import { useThemeModeStore } from '@/app/lib/theme/store/useThemeModeStore';

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
        <Button onClick={() => useThemeModeStore.setState({ mode: 'light' })}>
          Switch to Light Mode
        </Button>
        <Button onClick={() => useThemeModeStore.setState({ mode: 'dark' })}>
          Switch to Dark Mode
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
  color: ${({ theme }) => theme.color.primary};
  background-color: ${(theme) => theme.theme.bgColor.primary};
  padding: ${({ theme }) => theme.spacing.sp8};
  border-radius: ${({ theme }) => theme.radius.r12};
`;
