import React from 'react'
import { Button } from './Button'

export const Form = ({reqType, setReqType}) => {
  return (
    <form className='buttonForm' onSubmit={(e)=> e.preventDefault()}>
      <Button 
      buttonText = 'users'
      reqType = {reqType}
      setReqType = {setReqType}
      />
      <Button 
      buttonText = 'photos'
      reqType = {reqType}
      setReqType = {setReqType}
      />
      <Button 
      buttonText = 'todos'
      reqType = {reqType}
      setReqType = {setReqType}
      />
    </form>
  )
}
