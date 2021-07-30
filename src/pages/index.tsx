import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const place = {
  id: '1',
  name: 'Jacareí',
  slug: 'jacarei',
  location: {
    latitude: -23,
    longitude: -123
  }
}

const placeTwo = {
  id: '2',
  name: 'São José',
  slug: 'sao-jose',
  location: {
    latitude: -23,
    longitude: -47
  }
}

export default function Home() {
  return <Map places={[place, placeTwo]} />
}
