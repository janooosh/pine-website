import Image from 'next/image'
import appLogo from '@/images/logos/hello-pine.svg'

export function Logo(props) {
  return (
    <>
      <Image
        className=""
        src={appLogo}
        alt=""
        width={120}
        unoptimized
      />
      <img  />
    </>
  )
}
