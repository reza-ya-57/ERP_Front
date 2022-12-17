import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { post } from '../../app/axios/utility/post'

const getToken = async () => {
    const body = { username: 'reza' , password: 'reza@1618033988'}
    const data = await post('/token' , body , () => null)
    console.log(data)
}


export default function Login() {


  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('hello');
    getToken()
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <TextField label="نام کاربری" variant="outlined" />
        <TextField label="رمز ورود" variant="outlined" />
        <Button type="submit" variant="contained" color="primary">
          ثبت
        </Button>
      </form>
    </div>
  );
}
