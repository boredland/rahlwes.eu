import { useRef, useState } from 'react'
import Slider from 'slick-slider-react'

const Quote: React.FC<{ text: string; author: string }> = ({ text, author }) => (
  <div className="grid w-screen grid-cols-1 content-center justify-center justify-items-center gap-5">
    <p className="w-72 text-center text-lg italic lg:w-96">"{text}"</p>
    <p className="w-72 text-center text-sm lg:w-96">{author}</p>
  </div>
)

const Voices: React.FC = () => {
  const [index, setIndex] = useState(0)

  const quotes = [
    <Quote
      text="Ann-Kathrin Rahlwes is an absolute professional, extremely creative, and cultivates a very pleasant communication style. She's fun and interesting to work with."
      author="Judith Rosenthal"
      key="judith"
    />,
    <Quote
      text="Über eine Haushaltsauflösung erhielt ich einige Porträtzeichnung und wollte diese an ein Museum verschenken. Ich selbst hatte verschiedene Kontakte angefragt, jedoch ohne Erfolg. Frau Rahlwes, in der regionalen Museumslandschaft bestens vernetzt, stellte den Kontakt zum Stadtmuseum Wiesbaden her, sodass jetzt die Zeichnungen den Platz haben, der ihnen gebührt."
      author="A. M."
      key="a.m."
    />,
  ]
  const maxIndex = quotes.length - 1

  return (
    <div className="grid grid-flow-col items-center">
      <button
        className={`${index === 0 ? 'hidden' : ''} h-20 border-dashed border-transparent font-bold hover:border-gray-400 dark:hover:border-white`}
        onClick={() => setIndex(index > 0 ? index - 1 : 0)}
      >
        &lt;
      </button>
      <Slider className="gap-x-72" index={index} onSlide={setIndex}>
        {quotes}
      </Slider>
      <button
        className={`${index === maxIndex ? 'hidden' : ''} h-20 border-dashed border-transparent font-bold hover:border-gray-400  dark:hover:border-white`}
        onClick={() => setIndex(index < maxIndex ? index + 1 : maxIndex)}
      >
        &gt;
      </button>
    </div>
  )
}

export default Voices
