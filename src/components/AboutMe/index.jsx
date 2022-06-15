import { Container, Content, Text, TextContent, Title, Code } from './styles'

export function AboutMe() {
  return (
    <Container id='about-me'>
      <Content>
        <Title>About me</Title>
          <Text>
            <Code>&#60;h2&#62;Hello World!&#60;/h2&#62;</Code>
            <TextContent>
            <br />
            You know that guy who’s always on a computer, either gaming, watching stuff or typing <span id="colorful-purple">colorful</span> <span id="colorful-green">words</span> on a text editor? Yup, that’s me!
            <br /><br />
            I’m a software engineer from India currently in United States,  I’m currently an pu master's student at Northeastern University  in Computer Engineering and since 2020 I’ve worked with technologies such as JavaScript, ReactJS, NodeJS, SCSS, Git and C++.
            <br /><br />
            At the moment I’m pursing my master's in Information Systems at Northeastern University, in Boston MA,  needless to say I’m extremely passionate about education and its impact globally.
            </TextContent>
          </Text>
      </Content>
    </Container>
  )
}