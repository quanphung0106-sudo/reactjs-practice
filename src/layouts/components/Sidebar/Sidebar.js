import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import routesConfig from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For Your" to={routesConfig.routes.home} icon={<HomeIcon />} />
        <MenuItem title="Following" to={routesConfig.routes.following} icon={<UserGroupIcon />} />
        <MenuItem title="LIVE" to={routesConfig.routes.live} icon={<LiveIcon />} />
      </Menu>
    </aside>
  );
};

export default Sidebar;
