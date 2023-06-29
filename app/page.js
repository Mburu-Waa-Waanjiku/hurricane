import Acard from '@/lib/Acard'
import Bcard from '@/lib/Bfile'
import Ccard from '@/lib/Ccard'
import Dcard from '@/lib/Dcard'
import Ecard from '@/lib/Ecard'
import Ecard2 from '@/lib/Ecard2'
import Fcard from '@/lib/Fcard'
import Gfile from '@/lib/Gfile'
import Chatbox from '@/lib/Chatbox'
import Projects from '@/lib/Projects'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-3 sm:p-5">
      <Ccard/>
      <Dcard/>
      <Ecard2/>
      <Ecard/>
      <Acard/>
      <Bcard/>
      <Projects/>
      <Fcard/>
      <Gfile/>
      <Chatbox/>
    </main>
  )
}
