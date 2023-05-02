import React from 'react'
import type { ReactNode } from 'react'
import { DashboardLayoutWrapper } from './DashboardLayout.style'
import Header from 'ui/components/Header/Header'
import Footer from 'ui/components/Footer/Footer'

export type LayoutProps = {
  children: ReactNode | JSX.Element | JSX.Element[]
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <DashboardLayoutWrapper>
      <Header />
      {children}
      <Footer />
    </DashboardLayoutWrapper>
  )
}
