import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import Slider from './components/SliderComponent';
import AllCandidatesTable from './components/AllCandidatesTable';
import SliderComponent from './components/SliderComponent';
function App() {
    return (
        <div>
            <CssBaseline />
            <Navbar />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        marginTop: '64px', // Ensures content like the table isn't hidden by the navbar
                         // Ensures content is positioned next to the sidebar
                    }}
                >
                    <SliderComponent />
                    <Box sx={{ marginTop: '24px' }}>  {/* Added margin to push the table down a bit */}
                        <AllCandidatesTable />
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
export default App;