import CenteredHero from '@/app/components/CenteredHero'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type HeroSectionProps = {

  //Why Do I decided to use ExtractPageBuilderType here? and not use the type directly from sanity types?
  // This approach keeps the component strongly typed and avoids duplicating type definitions manually.
  // If the schema changes in the future, the generated types 
  // will stay synchronized with the component props.
  block: ExtractPageBuilderType<'centeredHero'>
  index: number
  pageId: string
  pageType: string
}

// Adapter component that maps Sanity block data to the existing
// CenteredHero presentational component.
export default function HeroSection({ block }: HeroSectionProps) {

  return (
    <CenteredHero
      theme={block.theme?.name}
      eyebrow={block.eyebrow}
      title={block.title}
      description={block.description}
    />
  )
}
