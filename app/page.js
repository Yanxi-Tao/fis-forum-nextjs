// 'use client';
import { Box,Drawer,Toolbar } from '@mui/material';

const drawerWidth = 240;

export default function Discovery() {
  return (
    <main>
      <Box sx={{ boxShadow: 3 }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
          elevation={3}
        >
          <Toolbar />
          hello
        </Drawer>
      </Box>
    </main>
  );
}
