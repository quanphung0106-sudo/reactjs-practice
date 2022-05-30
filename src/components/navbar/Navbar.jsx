import { Col, Row } from 'antd';
import styles from '~/styles/Navbar.module.scss';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Row className={styles.textsWrapper}>
          <Col span={12} className={styles.logo}>
            <h1>Booking.com</h1>
          </Col>
          <Col gutter={16} span={12} className={styles.texts}>
            <div className={styles.country} style={{ fontWeight: 500 }}>
              VND
            </div>
            <div className={styles.world}>
              <PublicOutlinedIcon />
            </div>
            <div className={styles.questionMark}>
              <QuestionMarkOutlinedIcon />
            </div>
            <button className={`${styles.outlineBtn} ${styles.btn}`}>
              List your property
            </button>
            <button className={styles.btn}>Register</button>
            <button className={styles.btn}>Sign in</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Navbar;
