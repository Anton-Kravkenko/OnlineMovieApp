import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../../../components/Layout/Layout'
import { IemailPassword } from '../../../../redux/User/UserInterface'
import { UseAction } from '../../../../shared/hook/useAction'
import './LoginPage.styles.scss'

const LoginPage = () => {
	const navigate = useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm()
	const { login } = UseAction()
	
	const onSubbmit = (data: any) => {
		login(data)
	}
	return <Layout className='LoginPage' havePadding>
		<form onSubmit={handleSubmit(onSubbmit)}>
			<h1>Login</h1>
			<input {...register('email', {
				required: true
			})} placeholder='Email' />
			{errors.email && errors.email.type === 'required' && <span>Email is required</span>}
			
			<input {...register('password', { required: true, minLength: 6 })} placeholder='password' />
			{errors.password && errors.password.type === 'required' && <span>Password is required</span>}
			{errors.password && errors.password.type === 'minLength' && <span>Password length
				minimum 6 letter</span>}
			<div className='FormWrapper'>
				<button type={'submit'} className='FormButton'>Login</button>
				<Link to={'/register'} className='FormText'>Go to register</Link>
			</div>
		
		
		</form>
	</Layout>
}

export default LoginPage