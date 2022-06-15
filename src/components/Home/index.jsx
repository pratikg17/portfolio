
import Modal from 'react-modal'

import englishCV from '../../assets/resume/Pratik Gawand_Resume.pdf'

import { Container, Content, Text, Title, Subtitle, DownloadHome } from './styles'

import pratikImg from '../../assets/images/pratikImg.png'
import downloadIcon from '../../assets/userIcons/download.svg'

Modal.setAppElement('#root') //accessibility code recommended by documentation

export function Home() {



  return (
    <>
    <Container>
      <Content>
          <div className="buttons-div">
            <div>
              <Text>
                <Title>
                  Hello!<br />

                I'm Pratik</Title>
                <Subtitle>A software developer</Subtitle>
                <DownloadHome  onClick={()=> {
                 window.open(englishCV) 
                }} id="download-home" >Resume <img src={downloadIcon}  alt="Ícone de download" /></DownloadHome>
                   
              </Text>
            </div>
          </div>
        <img id="pratik-img" src={pratikImg} alt="Pratik Gawand" />
      </Content>
    </Container>
    </>
  )
}