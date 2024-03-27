import LeftPane from './components/left-pane'
import RightPane from './components/right-pane'
import './globals.css'

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row sm:flex-row justify-evenly mt-24'>
      <div className='layout-width'>
        <LeftPane />
        <RightPane />
      </div>
    </div>
  )
}
