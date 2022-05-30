import styles from '~/styles/Header.module.scss';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import { Button, Col, Row } from 'antd';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const listVerhicles = [
    {
      icon: <BedOutlinedIcon />,
      type: 'Stays',
    },
    {
      icon: <FlightTakeoffOutlinedIcon />,
      type: 'Flights',
    },
    {
      icon: <BedOutlinedIcon />,
      type: 'Flight + Hotel',
    },
    {
      icon: <DirectionsCarFilledOutlinedIcon />,
      type: 'Car rentals',
    },
    {
      icon: <DirectionsCarFilledOutlinedIcon />,
      type: 'Taxi',
    },
  ];

  const setVerhicles = (i) => {
    if (i == 0) return styles.active;
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Row style={{ display: 'flex', gap: 10 }}>
          {listVerhicles.map((verhicle, i) => (
            <Col className={`${setVerhicles(i)} ${styles.vehicles}`} key={i}>
              {verhicle.icon}
              <span>{verhicle.type}</span>
            </Col>
          ))}
        </Row>
        <Row className={styles.textsWrapper} style={{ marginTop: '50px' }}>
          <Col className={styles.title}>
            <h1>A lifetime of discounts? It's Genius.</h1>
          </Col>
          <Col className={styles.desc}>
            <h2>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Booking.com account
            </h2>
          </Col>
          <Col>
            <Button className={styles.button} type='primary'>
              Sign in / Register
            </Button>
          </Col>
        </Row>
        <Row className={styles.searchBar}>
          <Col span={10} className={styles.address}>
            <BedOutlinedIcon style={{ margin: '0 10px' }} />
            <input type='text' placeholder='Vung Tau' />
          </Col>
          <Col span={5} className={`${styles.address} ${styles.checkin}`}>
            <CalendarMonthOutlinedIcon
              style={{ color: 'lightgray', margin: '0 10px' }}
            />
            <span>Check in - Check out</span>
          </Col>
          <Col span={7} className={`${styles.address} ${styles.options}`}>
            <PersonIcon style={{ color: 'lightgray', margin: '0 10px' }} />
            <span>2 People - 1 Children - 1 Room</span>
          </Col>
          <Col span={2}>
            <Button className={styles.button} type='primary'>
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
