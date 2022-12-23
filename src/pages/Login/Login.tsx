import { Button, TextField } from '@mui/material'
import { useAppDispatch } from '../../app/redux/hooks'
import { getToken } from '../../app/redux/features/authSlice'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import { incrementByAmount } from '../../app/redux/features/counterSlice'

export default function Login() {
  const dispatch = useAppDispatch();
  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(
      getToken({
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  const incrementHandler = () => {
    dispatch(incrementByAmount(5))
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <TextField name="email" type="text" label="ایمیل" variant="outlined" />
      <TextField
        name="password"
        type="password"
        label="رمز ورود"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        ثبت
      </Button>
      <Link to="/view-user">view user</Link>
      <Button onClick={incrementHandler}>
        increment by 5
      </Button>
    </form>
  );
}
