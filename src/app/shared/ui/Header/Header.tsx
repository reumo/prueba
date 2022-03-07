import React from 'react';
import { Button, Grid } from '@mui/material';
import { useUserStoreImplementation } from '../../../user/data/userStoreImplementation';
import { useUserViewModel } from '../../../user/controller/userViewModel';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import { HeaderIds } from './HeaderIds';


const Header = () => {
  const navigate = useNavigate();
  const userStore = useUserStoreImplementation();

  const {
    email,
    logout
  } = useUserViewModel(userStore);

  const handleClick = (): void => {
    logout();
    navigate("/");
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className="header-grid"
    >
      <span className="header-email">{email}</span>
      <Button variant="outlined"
        data-testid={HeaderIds.LOGOUT_BUTTON}
        onClick={handleClick}
      >Log Out</Button>
    </Grid>
  );
};

export default Header;