import { Stack, Avatar, Divider } from '@mui/material';
import IconMenu from './icon_menu.jpg';
import style from './nav-bar.module.css';
const NavBar = () => {

    return (
        <nav>
            <Stack className={style.nav}
                direction='column'
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}>
                <Avatar 
                    // sx={{ width:90, height:90, alignSelf:'center' }}
                    className={style.logo}
                    alt='Logo menu' 
                    src={IconMenu} />
                <p>Menu içi</p>
            </Stack>            
        </nav>
    );
};

export default NavBar;