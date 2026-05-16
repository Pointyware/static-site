import { About, Contact, Copyright } from "@/components/about-components";

export default function Footer() {
  return (
    <footer className='padding-md'>
      <a href='/about'><p>About/Contact</p></a>
      <Copyright />
    </footer>
  )
}
