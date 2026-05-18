import Image from "next/image"

export interface AccountPageProps {

}

export default function AccountPage(props: AccountPageProps) {

  return (
    <main className='container'>
      <AccountView />
    </main>
  )
}

export function AccountView() {

  return (
    <div>
      <ProfileImg url="https://null"/>
      <ProfileInfo name='Some User'/>
      <ProfileContact email="Test@gwizzle.mail" phone="4054054055"/>
    </div>
  )
}

export interface ProfileImgProps {
  url:string
}
export function ProfileImg(props:ProfileImgProps) {
  return (
    <Image
      src={props.url}
      alt="Profile Image" 
      width={200}
      height={200} />
  )
}

export interface ProfileInfoProps {
  name: string
}
export function ProfileInfo(props: ProfileInfoProps) {
  return (
    <section>
      <span><p>Name: { props.name }</p></span>
    </section>
  )
}

export interface ProfileContactProps {
  phone: string
  email: string
}
export function ProfileContact(props: ProfileContactProps) {

  return (
    <section>
      <span><p>Phone: { props.phone }</p></span>
      <span><p>Email: { props.email }</p></span>
    </section>
  )
}
