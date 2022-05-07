import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <h2 className={cx('content')}>{children}</h2>
      </div>
    </div>
  );
};

export default DefaultLayout;
