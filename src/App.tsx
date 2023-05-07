import Navbar from '@/layouts/navbar'
import { useState } from 'react'
import { SelectedAnchor } from "@/layouts/navbar/shared/types"

function App() {

  const [selectedAnchor, setSelectedAnchor] = useState<SelectedAnchor>(SelectedAnchor.Home);

  return (
    <div className='app bg-gray-20'>
      <Navbar 
      selectedAnchor={selectedAnchor}
      setSelectedAnchor={setSelectedAnchor}/>
    </div>
  )
}

export default App
