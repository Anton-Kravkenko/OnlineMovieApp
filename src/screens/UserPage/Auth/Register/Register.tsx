import { useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../../../components/Layout/Layout'
import { UseAction } from '../../../../shared/hook/useAction'
import { ErrorApi } from '../../../../utils/api/error.api'
import './Register.styles.scss'

const RegisterPage = () => {
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm()
	const { register: ServerRegister } = UseAction()
	const onSubbmit = (data: any) => {
		try {
			ServerRegister(data)
			navigate('/')
		} catch (e) {
			toastr.error('Error', ErrorApi(e))
		}
	}
	return <Layout className='RegisterPage' havePadding>
		<form onSubmit={onSubbmit}>
			<h1>Register</h1>
			<input placeholder='Email' />
			<input placeholder='password' />
			
			<div className='FormWrapper'>
				<button type={'submit'} className='FormButton'>Register</button>
				<Link to={'/login'} className='FormText'>Go to login</Link>
			</div>
		
		</form>
	</Layout>
}

export default RegisterPage