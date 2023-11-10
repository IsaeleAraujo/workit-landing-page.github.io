import React from 'react'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import rectangle from '../images/rectangle.svg'
import rectangle2 from '../images/rectangle2.svg'
import rectangle3 from '../images/rectangle3.svg'
import circleGroup from '../images/bg-parttern-1.svg'
import circleGroup2 from '../images/bg-parttern-2.svg'
import logoLight from '../images/logo-light.svg'
import phone from '../images/maxphone.svg'
import gradient from '../images/gradient-phone.svg'
import board from '../images/whiteboard.svg'
import '../index.css'
import board2 from '../images/littleboard.svg'
import oval from '../images/oval.svg'
import { getColorPalette } from '../theme'
import linesphone from '../images/linesphone.svg'


const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const colorPalette = getColorPalette()
  const colors = colorPalette.palette
  console.log('isMobile:', isMobile);
  console.log('isTablet:', isTablet);

  const calculateLeftValue = () => {
    if (isMobile) {
      return '70%';
    } else if (isTablet) {
      return '80%';
    } else {
      return '80%';
    }
  };

  const calculateLeftValue2 = () => {
    return isMobile ? theme.spacing(20) : isTablet ? theme.spacing(45) : theme.spacing(50);
  };
  const calculateTopValue = () => {
    return isMobile ? theme.spacing(8) : isTablet ? theme.spacing(45) : theme.spacing(45)
  }
  
  return (
       
       <div> 
       <Container > 
       <Row> 
       <Col>
       <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
       <img
        src={rectangle}
        alt="rectangle"
        className='responsive-rectangle'
        style={{
          width: '100vw',
          height: isMobile ? '60vh' : isTablet ? '70vh' : 'auto',       
      }}
      />
     
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Fraunces, sans-serif',
          color: colors.neutral.white2,
          textAlign: 'center',
          position: 'absolute',
          top: isMobile ? '25%' : isTablet ? '30%' : '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: isMobile ? '30px': isTablet ?  '60px' : '60px'
        }}
      >
        
        Data{' '}
        <span
          style={{ borderBottom: '4px solid', color: colors.secondary.main,   }}
        >
          <span style={{ color: colors.neutral.white2 }}>tailored</span>
        </span>{' '}
        to your needs.
        </Typography>

        <img
        src={logoLight}
        alt="logoLight"
        style={{
          position: 'absolute',
          top: isMobile ? '5%' : isTablet ? '9%' : '9%',
          width: isMobile ? '18vw': isTablet ?  '11vw' : '11vw',
          left: '5%',
        }}
      />

<Typography
     variant="h4"
     sx={{
       fontFamily: 'Manrope, sans-serif',
       position: 'absolute',
       top: isMobile ? '4%' : isTablet ? '9%' : '9%',
       fontSize: isMobile ? '10px': isTablet ?  '10px' : '18px',
       left: calculateLeftValue(),   
       }}
       >
        <span
          style={{ borderBottom: '4px solid', color: colors.secondary.main }}>
          <span style={{ color: colors.neutral.white2, whiteSpace: 'nowrap' }}>Apply for access</span>
          </span>

     </Typography>
       
     <button
        style={{
          fontFamily: 'Manrope, sans-serif',
          color: colors.primary.main,
          backgroundColor: colors.secondary.main,
          height: isMobile ? '10vh': isTablet ?  '10vh' : '10vh',
          width: isMobile ? '45vw': isTablet ?  '20vw' : '20vw',
          fontSize: isMobile ? '15px': isTablet ?  '15px' : '16px',
          top:calculateTopValue (),
          left: calculateLeftValue2(),
          fontWeight: '700',
          border: 'none',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Learn More
      </button>
      </div>
     </Col>
  </Row>
  </Container>
  </div>
  

  );
}

export default Header
