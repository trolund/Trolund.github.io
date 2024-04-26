import Footer from './footer/footer'
import Meta from './meta'
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <div 
        style={{ minHeight: "calc(100vh - (var(--footer-height) + var(--menu-height) + 20px))" }}
        >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
