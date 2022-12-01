import React from 'react'
import { Link } from 'react-router-dom'

const Plcaeorder = () => {
  return (
    <div>
      <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Order status</h5>
    <p class="card-text">Your order has been placed Successfully</p>
    <Link to="/" class="btn btn-primary">Click here to go to home</Link>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
    </div>
  )
}

export default Plcaeorder
