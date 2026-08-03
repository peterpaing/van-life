export default function Login(){

    return (
        <section className="login-page">
            <h4>Sign in to your account</h4>
            <form>
            <input type="email" placeholder="Email address" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit">Sign in</button>
            </form>
            <p>Don’t have an account? <span>Create one now</span></p>
            </section>
    )
}