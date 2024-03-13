import { Locations, LocationsGroup } from '../../../storybookBuild/index'
// import { useRouter } from 'next/router'
// import { useLanguageDetector } from 'context/langDetector'

// Interfaces
import { jsonModel } from '@/interfaces/blocks'
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export function UiLocationsComp(props: { block: jsonModel }): JSX.Element {
  const { data } = props.block
  // const router = useRouter()
  // const { langDetector } = useLanguageDetector()

  // // Check if there is not translated text // Alert message
  // langDetector([data?.locationTitle], router.locale)

  return (
    data.items.map((locationItem, locationIndex) => {
       
        return (<LocationsGroup
          id={locationItem?.anchorId}
          key={locationIndex}
          title={locationItem.locationTitle}
          locationsChildren={
            locationItem.locations.length > 0 &&
            locationItem.locations.map((item, index) => {
              // Check if there is not translated text // Alert message
              // langDetector([item.locationName, documentToHtmlString(item.address.json)], router.locale)
              return <Locations name={item.locationName} address={item.address} key={index} />
            })
          }
        />)
      }))
}
