import { useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Layout from '../../../../components/Layout/Layout'
import { UseAction } from '../../../../shared/hook/useAction'
import { useAuth } from '../../../../shared/hook/useAuth'
import { ErrorApi } from '../../../../utils/api/error.api'
import './LoginPage.styles.scss'

const LoginPage = () => {
	const navigate = useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm()
	const { login } = UseAction()
	const { user } = useAuth()
	const onSubbmit = (data: any) => {
		try {
			login(data)
			
		} catch (e) {
			toastr.error('Error', ErrorApi(e))
		}
	}
	if (user) {
		return <Navigate to={'/'} />
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