import { Typography } from '@mui/material';
import FormRegister from '../../containers/form-register/form-register';

const Register = () => {
    return (
        <>
            <Typography component='h2' variant='h6'>
                Register
            </Typography>
            <FormRegister />
            
            {/* TODO: → Ajouter le formulaire de register */}
        </>
    );
};

export default Register;