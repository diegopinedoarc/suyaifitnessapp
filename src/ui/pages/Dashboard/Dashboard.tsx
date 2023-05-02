import { Typography } from '@mui/material'
import React from 'react'
import Button from 'ui/components/Button'
import DashboardLayout from 'ui/Layouts/DashboardLayout'
import { useAuth } from 'utils/hooks/useAuth'

export default function Dashboard() {
  const [_, { logout }] = useAuth()
  return (
    <DashboardLayout>
      <Typography>Autenticate dashboard</Typography>
      <Button onClick={logout}>logout</Button>
    </DashboardLayout>
  )
}
