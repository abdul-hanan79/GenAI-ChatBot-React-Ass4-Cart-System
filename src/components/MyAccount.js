'use client'

import React, { useState, useContext } from 'react'
import { useCartContext } from '../context/CartContext'

const MyAccount = () => {
  const { userDetails, updateUserDetails } = useCartContext()
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [editedDetails, setEditedDetails] = useState({
    email: userDetails.email,
    password: userDetails.password,
  })

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    updateUserDetails(editedDetails)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedDetails({
      email: userDetails.email,
      password: userDetails.password,
    })
    setIsEditing(false)
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditedDetails({
      ...editedDetails,
      [name]: value,
    })
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">My Account</h2>
          <p className="card-description">View and manage your account details</p>
        </div>
        <div className="card-content">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                id="email"
                type="email"
                name="email"
                value={editedDetails.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="input"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={editedDetails.password}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="input"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="toggle-password-btn"
              >
                {/* {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer">
          {isEditing ? (
            <>
              <button onClick={handleCancel} className="btn-outline">
                Cancel
              </button>
              <button onClick={handleSave} className="btn-save">
                Save
              </button>
            </>
          ) : (
            <button onClick={handleEdit} className="btn-edit">
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyAccount
