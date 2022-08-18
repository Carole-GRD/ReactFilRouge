import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/MenuTwoTone';
import { Box } from "@mui/system";

const Header = ({onOpenMenu}) => {

    return (
        <header>
            <Box sx={{ flexGrow : 1}}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            onClick={() => onOpenMenu()}
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            
                            component='div'
                            variant='h5'>
                            Task List
                        </Typography>
                        
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};

export default Header;