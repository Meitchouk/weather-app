import React from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TranslateIcon from '@mui/icons-material/Translate';

const availableLanguages = ['en', 'es'];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleMenuOpen}>
        <TranslateIcon sx={{ color: 'white' }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {
          availableLanguages
            .map((l) => (
              <MenuItem key={`locale_${l}`} index={`locale_${l}`} onClick={() => changeLanguage(l)} selected={i18n.language === l}>{t(l)}</MenuItem>
            ))
        }
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
