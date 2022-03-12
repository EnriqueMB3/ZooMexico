import { AnimalsEverywhere } from "../AnimalsEverywhere/AnimalsEverywhere"
import { Donate } from "../Donate/Donate"
import { Donors } from "../Donors/Donors"
import { Events } from "../EventsSection/Events"
import { Copyright } from "../Footer/Copyright"
import { Sitemap } from "../Footer/Sitemap"
import { Galery } from "../Galery/Galery"
import { Header } from "../Header/Header"
import { Testimonials } from "../Testimonials/Testimonials"
import { DividerLine, HrLine, LayoutSite } from "./styles"

export const Layout = () => {


  return (
    <LayoutSite>
      <Header/>
      <AnimalsEverywhere/>
      <Donors/>
      <Donate/>
      <Testimonials/>
      <Events/>
      <Galery/>
      <DividerLine/>
      <Sitemap/>
      <HrLine/>
      <Copyright/>
    </LayoutSite>
  )
}
