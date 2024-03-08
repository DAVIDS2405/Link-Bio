/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Flex as RadixThemesFlex, Text as RadixThemesText } from "@radix-ui/themes"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <RadixThemesBox>
  <RadixThemesFlex align={`start`} className={`bg-black p-4`} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`} className={`text-white`}>
  {`David`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`center`} className={`w-full`} direction={`column`} gap={`2`}>
  <RadixThemesAvatar fallback={`David Basantes`} radius={`full`} size={`6`} src={``}/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} className={`bg-black`} justify={`center`}>
  <RadixThemesText as={`p`} className={`text-white`}>
  {`2024 David Basantes`}
</RadixThemesText>
  <img/>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`David Basantes - Desarrollador y Programador Web`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
