import {type PortableTextBlock} from 'next-sanity'

import PortableText from '@/app/components/PortableText'
import {InfoSection} from '@/sanity.types'
import {TextCombination} from '@/app/components/TextCombination'
import Grid from './Grid'
import ThemeWrapper from './ThemeWrapper'

type InfoProps = {
  block: InfoSection
  index: number
  // Needed if you want to createDataAttributes to do non-text overlays in Presentation (Visual Editing)
  pageId: string
  pageType: string
}

export default function InfoComponent({block}: InfoProps) {
  return (
    <ThemeWrapper theme={block.theme?.name || 'theme-white'}>
      <div className="surface-l0 -mt-header-height-mobile md:-mt-header-height-desktop pt-header-height-mobile md:pt-header-height-desktop relative">
        <Grid className=" py-margin-section-md relative z-10">
          <div className="col-span-4 md:col-span-6 md:col-start-4">
            <TextCombination
              type="d1p1"
              align="center"
              headingLevel="h1"
              title={block.heading || ''}
              description={block.subheading as string}
            />
            <div className="mt-4 text-primary">
              {block?.content?.length && (
                <PortableText className="" value={block.content as PortableTextBlock[]} />
              )}
            </div>
          </div>
        </Grid>
      </div>
    </ThemeWrapper>
  )
}
