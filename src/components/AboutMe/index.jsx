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
            You know that person who is always on his computer, either watching anything or entering <span id="colorful-purple">colorful</span> <span id="colorful-green">blocks</span>  into a text editor? Yes, it is me!
            <br /><br />
            I'm a software developer from India currently studying at Northeastern University in Computer Engineering. Since 2020, I've worked with technologies such as Java, Python, JavaScript, ReactJS, NodeJS, Docker, Git, and C#.   <br /><br />
            I'm now pursuing my master's degree in information systems at Northeastern University in Boston, MA, and it goes without saying that I'm highly enthusiastic about education and its worldwide influence.   </TextContent>
          </Text>
      </Content>
    </Container>
  )
}