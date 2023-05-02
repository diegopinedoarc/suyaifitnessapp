import { Box, css, styled } from '@mui/material'

export const DashboardLayoutWrapper = styled(Box)(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100vh;
  `
)
