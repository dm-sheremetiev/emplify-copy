import { fetchGraphQL } from '@/queries/config'

// Interface
import { language } from '@/interfaces/queries'

const pathsQuery = `
{
  jsonModel(id: "4s3KXLqJ9d1bxk2RQXytuZ") {
    data
  }
}
`

export async function getLanguages(): Promise<language[]> {
  const entry: { data: { jsonModel: { data: { items: { displayTitle: string; languageCode: string }[] } } } } = await fetchGraphQL(pathsQuery)
  return (
    entry?.data?.jsonModel?.data?.items || [
      {
        displayTitle: 'EN',
        languageCode: 'en'
      }
    ]
  )
}
