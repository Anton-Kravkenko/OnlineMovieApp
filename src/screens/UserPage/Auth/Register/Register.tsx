import { useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Layout from '../../../../components/Layout/Layout'
import { UseAction } from '../../../../shared/hook/useAction'
import { useAuth } from '../../../../shared/hook/useAuth'
import { ErrorApi } from '../../../../utils/api/error.api'
import './Register.styles.scss'

const RegisterPage = () => {
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm()
	const { register: ServerRegister } = UseAction()
	const { user } = useAuth()
	const onSubbmit = (data: any) => {
		try {
			ServerRegister(data)
		} catch (e) {
			toastr.error('Error', ErrorApi(e))
		}
		
		
		if (user) {
			return <Navigate to={'/'} />
		}
	}
	return <Layout className='RegisterPage' havePadding>
		<form onSubmit={handleSubmit(onSubbmit)}>
			<h1>Register</h1>
			<input placeholder='Email' {...register('email')} />
			<input placeholder='password' {...register('password')} />
			
			<div className='FormWrapper'>
				<button type={'submit'} className='FormButton'>Register</button>
				<Link to={'/login'} className='FormText'>Go to login</Link>
			</div>
		
		</form>
	</Layout>
}

export default RegisterPage