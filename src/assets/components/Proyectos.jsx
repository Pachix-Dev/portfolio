import { Col, Container, Nav, Row } from 'react-bootstrap'

export function Proyectos () {
  return (
    <div id='proyectos' className='proyectos mt-5 mb-5 pt-5 pb-5 position-relative'>
      <Container>
        <h1>Proyectos.</h1>
        <Nav defaultActiveKey='#web' as='ul'>
          <Nav.Item as='li'>
            <Nav.Link href='#web' eventKey='web'>Websites</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='#landing' eventKey='landing'>Lading pages</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='#ds' eventKey='ds'>Ds</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className='proyectos-content'>
          <Row className='mt-5'>
            <Col xs={12} md={4} className='mb-5'>
              <div className='position-relative proyectos-image'>
                <figure>
                  <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTVjYzhkYzY2MmI5ZTAyOGVkMGI3YzJlNGY5ODkyMzAwNDE3MWI0NSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/IL8AOtddUpQ2SzadjW/giphy.gif' className='w-100' alt='' />
                </figure>
                <div className='proyectos-info'>
                  <h5>Coffee Time</h5>
                  <div>
                    <a href='https://yapura.com.mx/coffeeTime' target='_blank' rel='noreferrer'>
                      <svg viewBox='0 0 15 12' xmlns='http://www.w3.org/2000/svg'>
                        <title>preview in a new window</title>
                        <path d='M14.4545 0H10.5C10.1988 0 10 0.198754 10 0.5C10 0.801246 10.1988 1 10.5 1H13L9.5 4.5L10.5 5.5L14 2V4.5C14 4.80125 14.1988 5 14.5 5C14.8012 5 15 4.80125 15 4.5V0.545455C15 0.244208 14.7558 0 14.4545 0ZM1.73333 1H8.00001V1.86667H1.73333C1.25469 1.86667 0.866667 2.25469 0.866667 2.73333V9.32003C0.866667 9.79868 1.25469 10.1867 1.73333 10.1867H12.1333C12.612 10.1867 13 9.79868 13 9.32004V7.00003H13.8667V9.32004C13.8667 10.2773 13.0906 11.0534 12.1333 11.0534H1.73333C0.776041 11.0534 0 10.2773 0 9.32003V2.73333C0 1.77604 0.77604 1 1.73333 1Z' fill='currentcolor' />
                      </svg>
                    </a>
                    <a href='https://github.com/Pachix-Dev/aprendiendo-react/tree/main/projects/00-coffee-time' target='_blank' rel='noreferrer'>
                      <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <title>GitHub</title>
                        <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
