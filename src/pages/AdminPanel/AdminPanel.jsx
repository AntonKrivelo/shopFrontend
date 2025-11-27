import { useEffect, useState } from 'react';
import axiosBase from '../../api/axiosBase';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography } from '@mui/material';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'role',
      headerName: 'Role',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await axiosBase.get(`/users`);
        setUsers(res.data.users || []);
      } catch (err) {
        console.error('Errors is loading users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box sx={{ maxWidth: 1100, margin: '10% auto' }}>
      <Paper sx={{ height: 400, width: '100%' }}>
        <Typography sx={{ fontWeight: 800, fontSize: 24, padding: '10px' }}>
          Control Panel
        </Typography>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </Box>
  );
};

export default AdminPanel;
