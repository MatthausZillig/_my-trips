import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render whitout any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in corret place', () => {
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
        latitude: -32,
        longitude: -30
      }
    }

    render(<Map places={[place, placeTwo]} />)
    expect(screen.getByTitle(/Jacareí/i)).toBeInTheDocument()

    expect(screen.getByTitle(/são josé/i)).toBeInTheDocument()
  })
})
