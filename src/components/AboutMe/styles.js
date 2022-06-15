import styled from 'styled-components'

export const Container = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 968px) {
    max-width: 730px;
  }
`

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 3.313rem;
  }
`

export const Text = styled.div `
  padding-top: 5.313rem;

  @media screen and (max-width: 638px) {
    padding-top: 1.713rem;
  }
`

export const TextContent = styled.p `
  max-width: 59%;

  #colorful-purple {
    color: var(--purple);
  }

  #colorful-green {
    color: var(--green);
  }

  @media screen and (max-width: 768px) {
    max-width: 76%;
  }

  @media screen and (max-width: 638px) {
    max-width: 100%;
  }

  @media screen and (max-width: 438px) {
    font-size: 0.91rem;
  }
`

export const Title = styled.h2 `
  font-size: var(--heading-title);
  color: var(--primary-color);
`

export const Code = styled.span ``