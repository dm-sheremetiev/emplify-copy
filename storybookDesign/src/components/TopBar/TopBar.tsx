import React, { useCallback, useEffect, useState } from 'react'
import './TopBar.scss'

type Props = {
  dataSource?: string
}

const TopBar = ({ dataSource }: Props) => {
  const LS_KEY = 'topBar_ctaBanner'
  const LS_VALUE = 'hidden'
  const [isVisible, setVisibility] = useState(false)

  const hideTopBar = useCallback(() => {
    try {
      setVisibility(false)
      if (navigator.cookieEnabled) sessionStorage.setItem(LS_KEY, LS_VALUE)
    } catch (e) {
      console.error(e)
    }
  }, [LS_VALUE, setVisibility])

  useEffect(() => {
    try {
      if (navigator.cookieEnabled) setVisibility(sessionStorage.getItem(LS_KEY) !== 'hidden')
    } catch (e) {
      console.error(e)
    }
  }, [LS_KEY, setVisibility])

  if (!isVisible) {
    return null
  }
  let text = ''

  if (dataSource === 'gis') {
    text =
      'Goinstore.com is now Emplifi.io – Find all the same live video shopping content, ' +
      'plus information on our Marketing and Service offerings to take your live commerce game to the next level.'
  } else if (dataSource === 'sbks') {
    text =
      'Socialbakers.com is now Emplifi.io – Find all the same social media insights and tools, plus information on' +
      ' our Commerce and Service offerings to take your social media game to the next level.'
  } else if (dataSource === 'pixlee') {
    text =
      'Pixlee TurnTo is now Emplifi — Access your content below, and be sure to check out the rest of our website' +
      ' to learn more about our marketing, commerce, and care offerings.'
  }

  return (
    <div className="top-bar">
      <div className="top-bar__wrapper">
        <div className="top-bar__content">
          <h3 className="top-bar__heading">Welcome to Emplifi!</h3>
          <p className="top-bar__paragraph">{text}</p>
        </div>
        <img className="top-bar__bg-img" src="/images/clouds.svg" alt="" role="presentation" />
      </div>
      <span className="top-bar__close" onClick={hideTopBar}>
        close
      </span>
    </div>
  )
}

export default TopBar
