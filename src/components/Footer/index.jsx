import { Container, Content, Text, FooterText, FooterDivider, Code } from './styles'

export function Footer() {
  return (
    <Container>
      <Content>
          <Text>
            <FooterText> Mumbai MH - India | Boston MA - United States </FooterText>
            <FooterText>pjgawand@gmail.com</FooterText>
            <FooterDivider>
            <p className='last-text'>Made with React, Styled-Components, a few libs {new Date().getFullYear()} &copy; Pratik Gawand.</p>
            <Code>&#60; /html&#62;</Code>
          </FooterDivider>
          </Text>
      </Content>
    </Container>
  )
}