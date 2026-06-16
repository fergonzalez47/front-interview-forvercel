import {PortableTextBlock} from 'next-sanity'

import ResolvedLink from '@/app/components/ResolvedLink'
import PortableText from '@/app/components/PortableText'
import Image from '@/app/components/SanityImage'
import {stegaClean} from '@sanity/client/stega'
import {ExtractPageBuilderType} from '@/sanity/lib/types'
import ThemeWrapper from './ThemeWrapper'
import {Text} from './Text'
import Grid from './Grid'

type CtaProps = {
  block: ExtractPageBuilderType<'callToAction'>
  index: number
  // Needed if you want to createDataAttributes to do non-text overlays in Presentation (Visual Editing)
  pageType: string
  pageId: string
}

export default function CTA({block}: CtaProps) {
  const {heading, eyebrow, body = [], button, image, theme, contentAlignment} = block

  const isImageFirst = stegaClean(contentAlignment) === 'imageFirst'

  return (
    <ThemeWrapper theme={theme?.name || 'theme-white'}>
      <div className="relative">
        <div className="surface-l0 absolute inset-0 bg-size-[5px] bg-[url(/images/tile-1-black.png)] dark:bg-[url(/images/tile-1-white.png)] opacity-50" />
        <Grid className="relative py-margin-section-md">
          <div
            className={`${isImageFirst && image ? 'col-span-4 md:col-span-6 md:col-start-6' : 'col-span-4 md:col-span-6 md:col-start-1'} flex flex-col justify-center gap-2 `}
          >
            {eyebrow && (
              <Text type="caption1" className="text-secondary">
                {eyebrow}
              </Text>
            )}
            {heading && (
              <Text type="display2" className="text-primary">
                {heading}
              </Text>
            )}
            {body && (
              <div className="lg:text-left text-primary">
                <PortableText value={body as PortableTextBlock[]} className="dark:prose-invert" />
              </div>
            )}

            {button?.buttonText && button?.link && (
              <div className="flex mt-4">
                <ResolvedLink
                  link={button?.link}
                  className="rounded-full flex gap-2 font-mono text-sm whitespace-nowrap items-center bg-black dark:bg-white hover:bg-blue focus:bg-blue py-3 px-6 text-white dark:text-black dark:hover:text-white transition-colors duration-200"
                >
                  {button?.buttonText}
                </ResolvedLink>
              </div>
            )}
          </div>
          <div className="col-span-4 md:col-span-6 md:col-start-7">
            {image?.asset?._ref && (
              <Image
                id={image.asset._ref}
                alt="Demo image"
                width={704}
                crop={image.crop}
                mode="cover"
                className="rounded-sm"
              />
            )}
          </div>
        </Grid>
      </div>
    </ThemeWrapper>
  )
}
