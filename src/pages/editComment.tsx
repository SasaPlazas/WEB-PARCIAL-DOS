import React from 'react'
import { UseDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router' 
import { useParams } from 'react-router'
import type { RootState } from '@reduxjs/toolkit/query'
import { editComment } from '../redux/commentSlice'
import { useState } from 'react'




const editComment = () => {
  return (
    <div>editComment</div>
  )
}

export default editComment