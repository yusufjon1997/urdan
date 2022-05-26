import React from 'react'
import AuthContainer from '../../components/Auth/AuthContainer'
import Bredcrumb from '../../components/Bredcrumb'

function Auth() {
  return (
      <>
      <Bredcrumb pageName="Login - Register" />
      <AuthContainer />
      </>
  )
}

export default Auth