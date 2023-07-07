import Image from 'next/image'
import Buttonx from '@/components/bootstrap/Button';

export default function Home() {
  //process.env.SECRET_KEY
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Buttonx />
    </main>
  )
}
