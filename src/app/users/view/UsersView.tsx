import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useUsersStoreImplementation } from '../data/usersStoreImplementation';
import { useUsersViewModel } from '../controller/usersViewModel';
import { TableFooter, TablePagination, TableRow } from '@mui/material';
import DashBoard from '../../shared/ui/DashBoard/DashBoard';
import { UsersViewIds } from './UsersViewIds';

export default function UsersView() {
  const usersStore = useUsersStoreImplementation();

  const { users, total, getUsers } = useUsersViewModel(usersStore);

  React.useEffect(() => {
    getUsers(page + 1, rowsPerPage);
  }, [])


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  React.useEffect(() => {
    getUsers(page + 1, rowsPerPage);
  }, [page, rowsPerPage])

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <DashBoard>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Avatar</TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users?.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                data-testid={UsersViewIds.TABLE_ROW}
              >
                <TableCell align="left">
                  <img
                    src={user.avatar}
                    alt={user.avatar}
                    loading="lazy"
                    width="50px"
                  />
                </TableCell>
                <TableCell align="left">{user.id}</TableCell>
                <TableCell align="left">
                  {user.firstName}
                </TableCell>
                <TableCell align="left">{user.lastName}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[1, 2, 5, 10]}
                colSpan={3}
                count={total}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </DashBoard>
  );

}
