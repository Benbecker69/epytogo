import React, {useState} from 'react';
import {TextField, Button} from '@mui/material';
import styles from './FormUser.module.css';

const FormUser = () => {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleValidation = () => {
        const newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = 'Le Format d\'adresse email invalide';
        }
        if (login.length < 3) {
            newErrors.login = 'Le nom d\'utilisateur doit comporter au moins 3 caractères';
        }
        if (!validatePassword(password)) {
            newErrors.password = 'Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidation()) {
            console.log({email, login, password});
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formUser}>
            <TextField
                label="Adresse email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
            />
            <TextField
                label="Nom d'utilisateur"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                error={!!errors.login}
                helperText={errors.login}
            />
            <TextField
                label="Mot de passe"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
            />
            <Button type="submit" variant="contained" className={styles.submitButton}>
                Créer un compte
            </Button>
        </form>
    );
};

export default FormUser;
