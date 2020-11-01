/* eslint-disable no-restricted-globals */
// 🐨 you'll need to import React and ReactDOM up here

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')

import React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

// function App() {
//   const [openModal, setOpenModal] = React.useState('none')

//   function login(formData) {
//     console.log('login', formData)
//   }

//   function register(formData) {
//     console.log('register', formData)
//   }

//   return (
//     <div>
//       <Logo width="80" height="80" />
//       <h1>Bookshelf</h1>
//       <div>
//         <button onClick={() => setOpenModal('login')}>Login</button>
//       </div>
//       <div>
//         <button onClick={() => setOpenModal('register')}>Register</button>
//       </div>
//       <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
//         <div>
//           <button onClick={() => setOpenModal('none')}>Close</button>
//         </div>
//         <h3>Login</h3>
//         <LoginForm onSubmit={login} buttonText="Login" />
//       </Dialog>
//       <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
//         <div>
//           <button onClick={() => setOpenModal('none')}>Close</button>
//         </div>
//         <h3>Register</h3>
//         <LoginForm onSubmit={register} buttonText="Register" />
//       </Dialog>
//     </div>
//   )
// }
const App = () => {
  const [openModal, setOpenModal] = React.useState('none')
  const open = () => setOpenModal(true)
  const close = () => setOpenModal(false)

  function login(formData) {
    console.log('login', formData)
  }
  function register(formData) {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        {openModal === 'login' && (
          <Dialog aria-label="Login form">
            {' '}
            <button onClick={close}>Close</button>Login
            <LoginForm onSubmit={login} buttonText="Login" />
          </Dialog>
        )}
      </div>
      <div>
        {openModal === 'register' && (
          <Dialog aria-label="Login form">
            {' '}
            <button onClick={close}>Close</button>Register
            <LoginForm onSubmit={register} buttonText="Register" />
          </Dialog>
        )}
      </div>

      <div>
        {' '}
        <button onClick={() => setOpenModal('login')}>Login1</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
