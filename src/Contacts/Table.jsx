import React, { useState } from 'react';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../Header";
import { Stack } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';

// Table component
const Table = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [page, setPage] = useState(0);
  const pageSize = 5;
  const handlePageChange = (event, newPage) => {
    setPage(newPage - 1);
  };

  // Table columns definition
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  // Calculate the data to display for the current page
  const currentPageData = mockDataContacts.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="67vh"
        sx={{
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
          "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
          "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${colors.grey[100]} !important` },
          "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[800] },
        }}
      >
        {/* DataGrid component */}
        <DataGrid
          rows={currentPageData}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
            Pagination: () => (
              <Stack spacing={2} mt={2} className='mx-5' >
                <Pagination
                  count={Math.ceil(mockDataContacts.length / pageSize)}
                  page={page + 1}
                  onChange={handlePageChange}
                  variant="outlined"
                  shape="rounded"
                />
              </Stack>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Table;
