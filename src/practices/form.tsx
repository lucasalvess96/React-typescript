import { FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function Forms() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const navigate = useNavigate()

    async function handleSubmitForm(event: FormEvent) {
        event.preventDefault()

        if (password === confirmPassword) {
            alert(`Bem-vindo ${email}`)
        } else {
            alert('as senhas nao conferem')
        }

        console.log(
            {
                email,
                password,
                confirmPassword
            })

        const data = { email, password, confirmPassword }

        // try {
        //     await api.post('/create', data)
        // } catch (error) {
        //     alert('error sending to database')
        // }

        alert("registered successfully")

        navigate('/')
    }

    return (
        <>
            <form action="" onSubmit={handleSubmitForm}>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="your password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <input
                    type="password"
                    name="conf-password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                />

                <button>submit</button>
            </form>
        </>
    )
}
