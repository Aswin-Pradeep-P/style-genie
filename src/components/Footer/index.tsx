import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { AppBar, Toolbar, Box } from '@mui/material';
import { IconButton } from '@mui/material';

import { colors } from '@Constants/colors';
import {
  HomeIcon,
  Category,
  Explore,
  Profile,
  CategoryActive,
  HomeIconActive,
  ExploreActive,
  ProfileActive
} from '@assets/icons';
import { ROUTES } from '@Constants/routes';

import styles from './styles';

interface FooterItem {
  key: string;
  label: string;
  icon: JSX.Element;
  path: string[];
  activeIcon: JSX.Element;
}

const Footer: React.FC<{ currentPage?: string }> = ({ currentPage = '' }) => {
  const [selectedTab, setSelectedTab] = useState<string>(currentPage);

  const location = useLocation();
  const navigate = useNavigate();

  const footerItems: FooterItem[] = [
    {
      key: 'Home',
      label: 'Home',
      icon: <HomeIcon />,
      path: [ROUTES.HOME],
      activeIcon: <HomeIconActive />
    },
    {
      key: 'Category',
      label: 'Category',
      icon: <Category />,
      path: [ROUTES.CATEGORY],
      activeIcon: <CategoryActive />
    },
    {
      key: 'Explore',
      label: 'Explore',
      icon: <Explore />,
      path: [ROUTES.EXPLORE],
      activeIcon: <ExploreActive />
    },

    {
      key: 'Profile',
      label: 'Profile',
      icon: <Profile />,
      path: [ROUTES.PROFILE],
      activeIcon: <ProfileActive />
    }
  ];

  const handleTabChange = (key: string) => {
    setSelectedTab(key);
  };

  return (
    <Box sx={styles.footerWrapper}>
      <AppBar position='static' sx={styles.appbar} elevation={2}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.actionWrapper}>
            {footerItems.map((item) => (
              <Box sx={styles.tabWrapper} key={item.key} onClick={() => navigate(item.path[0])}>
                <IconButton disableRipple onClick={() => handleTabChange(item.key)}>
                  {selectedTab === item.key || item.path.includes(location.pathname) ? item.activeIcon : item.icon}
                </IconButton>
                <Box
                  sx={{
                    ...styles.label,
                    ...((selectedTab === item.key || item.path.includes(location.pathname)) && {
                      color: colors.PRIMARY
                    })
                  }}
                >
                  {item.label}
                </Box>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
