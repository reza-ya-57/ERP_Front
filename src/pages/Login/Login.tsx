import { Button , TextField } from '@mui/material'
import { useAppDispatch } from '../../app/redux/hooks'
import { getToken } from '../../app/redux/features/authSlice'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log(e.target.username.value)
    dispatch(getToken({ username: e.target.username.value, password: e.target.password.value }))
  };

  return (
    <form onSubmit={submitHandler}>
        <TextField name='username' label="نام کاربری" variant="outlined" />
        <TextField name='password' label="رمز ورود" variant="outlined" />
        <Button type="submit" variant="contained" color="primary">
          ثبت
        </Button>
    </form>
  );
}
