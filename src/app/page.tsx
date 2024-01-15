import LeftPane from './components/left-pane'
import RightPane from './components/right-pane'
import './globals.css'

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row sm:flex-row justify-center mt-24'>
      <div className='layout-width'>
        <LeftPane />
        <div className="flex-1">
          <RightPane />
        </div>
      </div>
    </div>
  )
}
