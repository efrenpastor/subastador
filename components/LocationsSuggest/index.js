import * as Popover from '@radix-ui/react-popover'
import { styled, keyframes } from '@stitches/react'
import { violet, mauve } from '@radix-ui/colors'
import { useState } from 'react'
import useDomainContext from '../../context/domain'
import { useRouter } from 'next/router'

const LocationsSuggest = () => {
  const domain = useDomainContext()
  const router = useRouter()
  
  const SUGGEST_STATE = {
    INIT: 'INIT',
    EMPTY: 'EMPTY',
    FULL: 'FULL'
  }
  const [suggestState, setSuggestState] = useState(SUGGEST_STATE.INIT)
  const [cities, setCities] = useState([])
  const [provinces, setProvinces] = useState([])
  const [regions, setRegions] = useState([])
  const [currentLocation, setCurrentLocation] = useState(null)

  const resetLocations = () => {
    setCities([])
    setProvinces([])
    setRegions([])
    setCurrentLocation(null)
  }
  const findLocations = (e) => {
    const locationName = e.target.value

    if (locationName.length >= 3) {
      domain.GetLocationListByNameUseCase.execute({
        locationName,
      }).then((res) => {
        const { locationEntityList } = res
        setCurrentLocation(locationEntityList[0])
        if (locationEntityList.length > 0) {
          setSuggestState(SUGGEST_STATE.FULL)

          const cities = locationEntityList.map((location) => ({ name: `${location.city} (${location.province})`, search: location.city }))
          setCities([... new Set(cities)])
          
          const provinces = locationEntityList.map((location) => ({ name: `${location.province} (${location.region})`, search: location.province }))
          setProvinces([... new Set(provinces)])

          const regions = locationEntityList.map((location) => ({ name: location.region, search: location.region }))
          setRegions([... new Set(regions)])
        } else {
          resetLocations()
          setSuggestState(SUGGEST_STATE.EMPTY)
        }
      }).catch((err) => console.error(err))
    } else {
      resetLocations()
      setSuggestState(SUGGEST_STATE.INIT)
    }
  }

  const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)'},
    '100%': { opacity: 1, transform: 'translateY(0)'},
  })

  const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX-2px)'},
    '100%': { opacity: 1, transform: 'translateX(0)'},
  })

  const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)'},
    '100%': { opacity: 1, transform: 'translateY(0)'},
  })

  const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)'},
    '100%': { opacity: 1, transform: 'translateX(0)'},
  })

  const contentStyles = {
    minWidth: 220,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 5,
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  }
  const PopoverContent = styled(Popover.Content, contentStyles)

  const itemStyles = {
    all: 'unset',
    fontSize: 14,
    lineHeight: 1,
    color: violet.violet11,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '3px 8px',
    position: 'relative',
    userSelect: 'none',
    '&[data-disabled]': {
      color: mauve.mauve8,
      pointerEvents: 'none',
    },
    '&:hover': {
      backgroundColor: violet.violet9,
      color: violet.violet1,
    }
  }
  const PopoverItem = styled('div', itemStyles)
  const Separator = styled('div', {
    height: 1,
    backgroundColor: violet.violet6,
    margin: 5,
  })
  return (
    <Popover.Root>
        <Popover.Trigger asChild>
          <input
            type="text"
            placeholder="Buscar en..."
            onChange={findLocations}
          />
        </Popover.Trigger>
        {suggestState !== SUGGEST_STATE.INIT ? (
          <Popover.Portal>
            <PopoverContent onCloseAutoFocus={e => e.preventDefault()} onEscapeKeyDown={e => e.preventDefault()} onOpenAutoFocus={e => e.preventDefault()} sideOffset={5}>
              <>
                {suggestState === SUGGEST_STATE.FULL ? (
                  <>
                    {cities.length > 0 && cities.map((city, i) => (
                      <PopoverItem key={`${city.name}-${i}`} onClick={() => { router.push(`/test/${city.search}`) }}>
                        <span>{city.name}</span>
                      </PopoverItem>
                    ))}
                    <Separator />
                    {provinces.length > 0 && provinces.map((province, i) => (
                      <PopoverItem key={`${province.name}-${i}`}>
                        {province.name}
                      </PopoverItem>
                    ))}
                    <Separator />
                    {regions.length > 0 && regions.map((region, i) => (
                      <PopoverItem key={`${region.name}-${i}`}>
                        {region.name}
                      </PopoverItem>
                    ))}
                  </>
                ) : suggestState === SUGGEST_STATE.EMPTY ? (
                  <PopoverItem>Sin resultados</PopoverItem>
                ) : null}
              </>
            </PopoverContent>
          </Popover.Portal>
        ) : ( null )}
      </Popover.Root>
  )
}

export default LocationsSuggest