import { Box, useTheme} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import Header from '../../components/Header';

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar", flex: 0.5 },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left"
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1
        },
        {
            field: "city",
            headerName: "City",
            flex: 1
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
        }
    ];

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[500]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[500],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[600]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[500]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`
                    }
                }}
            >     
            <DataGrid 
                rows = {mockDataContacts}
                columns = {columns}
                components={{ Toolbar: GridToolbar }}
            />
            </Box>
        </Box>
    )
};

export default Contacts;