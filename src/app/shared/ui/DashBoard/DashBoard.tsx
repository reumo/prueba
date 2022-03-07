import React from 'react';
import Header from '../Header/Header';
import { Container } from '@mui/material';
import { useUserStoreImplementation } from '../../../user/data/userStoreImplementation';
import { useUserViewModel } from '../../../user/controller/userViewModel';

const DashBoard = (props: { children: React.ReactNode; }) => {

  const userStore = useUserStoreImplementation();

  const {
    setUser,
  } = useUserViewModel(userStore);

  React.useEffect(() => {
    const sessionEmail = sessionStorage.getItem('userEmail');
    const sessionToken = sessionStorage.getItem('userToken');

    if(!!sessionEmail && !!sessionToken) setUser(sessionEmail, sessionToken);
  }, []);

  return (
    <Container maxWidth="xl">
      <Header></Header>
      {props.children}
    </Container>
  );
};

export default DashBoard;