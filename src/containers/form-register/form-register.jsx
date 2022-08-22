
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const FormRegister = () => {

    const { register, handleSubmit } = useForm();

    const onRegister = (data) => {
        console.log(data);
    }

    return (
        // "handleSubmit" fait le "e.preventDefault" pour nous
        <form onSubmit={handleSubmit(onRegister)}>
            <div>
                <label htmlFor='pseudo'>Pseudo</label>
                <input id='pseudo' type="text" {...register('pseudo')} />
            </div>
            <div>
                <label htmlFor='email'>Courriel</label>
                <input id='email' type="email" {...register('email')} />
            </div>
            <div>
                <label htmlFor='firstname'>Prénom</label>
                <input id='firstname' type="text" {...register('firstname')} />
            </div>
            <div>
                <label htmlFor='lastname'>Nom</label>
                <input id='lastname' type="text" {...register('lastname')} />
            </div>
            <div>
                <label htmlFor='password'>Mot de passe</label>
                <input id='password' type="password" {...register('password')} />
            </div>

            <Button type='submit' variant='contained' color='primary'>
                Créer un compte
            </Button>
        </form>
    );
};

export default FormRegister;