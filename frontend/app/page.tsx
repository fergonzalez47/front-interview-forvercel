import Link from 'next/link'
import {PortableText} from '@portabletext/react'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import {dataAttr} from '@/sanity/lib/utils'

export default async function Page() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  //used to list all pages with links to them in the homepage, to facilitate navigation and testing.
  //remember: import {allPagesQuery} from '@/sanity/lib/queries'

  // const {data: pages} = await sanityFetch({
  //   query: allPagesQuery,
  // })

  return (
    <>
      <div className="relative">
        <div className="relative bg-[url(/images/tile-1-black.png)] bg-size-[5px]">
          <div className="bg-gradient-to-b from-white w-full h-full absolute top-0"></div>
        </div>
        <div className=" flex flex-col items-center">
          <div className="container relative mx-auto max-w-2xl pb-20 pt-10 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center">
            <div className="prose sm:prose-lg md:prose-xl xl:prose-2xl text-gray-700 prose-a:text-gray-700 font-light text-center">
              {settings?.description && (
                <div
                  data-sanity={dataAttr({
                    id: settings._id,
                    type: 'settings',
                    path: 'description',
                  }).toString()}
                >
                  <PortableText value={settings.description} />
                </div>
              )}
              <div className="flex items-center flex-col gap-4">
                <Link
                  href="https://www.sanity.io/docs"
                  className="inline-flex text-brand text-xs md:text-sm underline hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sanity Documentation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 ml-1 inline"
                    fill="currentColor"
                  >
                    <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                  </svg>
                </Link>
              </div>

              {/* ONLY FOR TESTING */}
              {/* Temporary inline type used to avoid an implicit 'any' warning while keeping // the
              implementation simple. The query is already defined and can be fully // typed later
              using generated Sanity types if needed. */}

              {/* {pages?.map((page: {_id: string; name: string; slug: string}) => (
                <li key={page._id}>
                  <Link href={`/${page.slug}`} className="text-blue-600 underline">
                    {page.name}
                  </Link>
                </li>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
