import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Box } from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
const Sidebar = () => {
    const menuItems = [
        { text: 'All Candidates', icon: <FeedIcon /> },
        { text: 'My Group Posts', icon: <GroupIcon /> },
        { text: 'My Network Posts', icon: <NetworkCheckIcon /> },
    ];
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    height: 'calc(100% - 64px)',  // Reduced height to prevent overlap with navbar
                    marginTop: '65px',            // Start the sidebar below the 64px navbar
                },
            }}
        >
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
export default Sidebar;
// import React from 'react';
// import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, Box } from '@mui/material';
// import FeedIcon from '@mui/icons-material/Feed';
// import GroupIcon from '@mui/icons-material/Group';
// import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';

// const Sidebar = () => {
//     const menuItems = [
//         { text: 'All Candidates', icon: <FeedIcon /> },
//         { text: 'My Group Posts', icon: <GroupIcon /> },
//         { text: 'My Network Posts', icon: <NetworkCheckIcon /> },
//     ];

//     return (
//         <Drawer
//             variant="permanent"
//             sx={{
//                 width: 240,
//                 flexShrink: 0,
//                 '& .MuiDrawer-paper': {
//                     width: 240,
//                     height: 'calc(100% - 64px)',  // Adjust height to prevent overlap with navbar
//                     marginTop: '100px',            // Start the sidebar below the navbar
//                 },
//             }}
//         >
//             <Box
//                 sx={{
//                     padding: 2,                      // Add some padding
//                     backgroundColor: 'primary.main', // Adjust as needed
//                     color: 'white',                  // Text color
//                 }}
//             >
//                 <Typography variant="h6" component="div">
//                     Bench Management System
//                 </Typography>
//             </Box>
//             <List>
//                 {menuItems.map((item, index) => (
//                     <ListItem button key={index}>
//                         <ListItemIcon>{item.icon}</ListItemIcon>
//                         <ListItemText primary={item.text} />
//                     </ListItem>
//                 ))}
//             </List>
//         </Drawer>
//     );
// };

// export default Sidebar;
