import { Carousel } from './components/carousel/Carousel'
import { Swipper } from './components/swipper/Swipper'

export function App() {
  const slides = [
    "https://picsum.photos/id/1032/1280/400",
    "https://picsum.photos/id/1033/1280/400",
    "https://picsum.photos/id/1037/1280/400",
    "https://picsum.photos/id/1035/1280/400",
    "https://picsum.photos/id/1036/1280/400",
  ]
  
  return (
    <div className="container">
      {/* <Carousel 
        slides={slides} 
        interval={5000} 
        controls={true} 
        indicators={true} /> */}
        <Swipper />
    </div>
  )
}