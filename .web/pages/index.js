/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { GithubIcon as LucideGithubIcon, InstagramIcon as LucideInstagramIcon, LinkedinIcon as LucideLinkedinIcon, MailIcon as LucideMailIcon, Music2Icon as LucideMusic2Icon, TwitchIcon as LucideTwitchIcon, WifiOffIcon as LucideWifiOffIcon, YoutubeIcon as LucideYoutubeIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import Script from "next/script"
import NextLink from "next/link"
import NextHead from "next/head"



export function Link_2e43ca7e45bbdb194b7fba7089930c67 () {


  return (
    <RadixThemesLink asChild={true} css={{"color": "white", "text-decoration": "none", "&:hover": "none", "cursor": "url('cursor/cursorclick.png'), pointer"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://david-dev.dev/`} passHref={true}>
  <RadixThemesText as={`p`}>
  {`David`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_6bf855c22332ddc310f44965c032d475 () {


  return (
    <RadixThemesLink asChild={true} css={{"text-decoration": "none", "&:hover": "none", "cursor": "url('cursor/cursorclick.png'), pointer"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/DAVIDS2405`} passHref={true}>
  <LucideGithubIcon css={{"color": "white", "border": "2px solid", "borderColor": "white", "borderRadius": "100%", "padding": "0.082rem"}} size={35}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_e3788ff3eea2776ffdbbbaa23d8d1731 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "text-decoration": "none", "&:hover": "none", "cursor": "url('cursor/cursorclick.png'), pointer"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/david-sebastian-basantes-lucero-40bb97216/`} passHref={true}>
  <RadixThemesButton css={{"padding": "1rem", "width": "100%", "height": "100%", "display": "flex", "alignItems": "center", "justify-content": "start", "whiteSpace": "normal", "color": "#FFFFFF", "background-color": "#171F26", "&:hover": {"background-color": "#087EC4"}, "cursor": "url('cursor/cursorclick.png'), pointer"}} radius={`large`}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`4`}>
  <LucideLinkedinIcon css={{"color": "var(--current-color)"}} size={30}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"color": "#FFFFFF"}} size={`2`}>
  {`LinkedIn`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB"}} size={`1`}>
  {`Perfil de LinkedIn`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_bf80e492e22c87b1224b6ba4f9f3480e () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "text-decoration": "none", "&:hover": "none", "cursor": "url('cursor/cursorclick.png'), pointer"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`mailto:sebastian2405lucero@hotmail.com`} passHref={true}>
  <RadixThemesButton css={{"padding": "1rem", "width": "100%", "height": "100%", "display": "flex", "alignItems": "center", "justify-content": "start", "whiteSpace": "normal", "color": "#FFFFFF", "background-color": "#171F26", "&:hover": {"background-color": "#087EC4"}, "cursor": "url('cursor/cursorclick.png'), pointer"}} radius={`large`}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`4`}>
  <LucideMailIcon css={{"color": "var(--current-color)"}} size={30}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"color": "#FFFFFF"}} size={`2`}>
  {`Email`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB"}} size={`1`}>
  {`Correo electrónico principal`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_72783e110b63502aba5957cd075c8cae () {
  const state__page__state = useContext(StateContexts.state__page__state)


  return (
    <Fragment>
  {isTrue(state__page__state.is_live) ? (
  <Fragment>
  <RadixThemesLink asChild={true} css={{"width": "100%", "text-decoration": "none", "&:hover": "none", "cursor": "url('cursor/cursorclick.png'), pointer"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={``} passHref={true}>
  <RadixThemesButton css={{"padding": "1rem", "width": "100%", "height": "100%", "display": "flex", "alignItems": "center", "justify-content": "start", "whiteSpace": "normal", "color": "#FFFFFF", "background-color": "#171F26", "&:hover": {"background-color": "#087EC4"}, "cursor": "url('cursor/cursorclick.png'), pointer"}} radius={`large`}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`4`}>
  <LucideTwitchIcon css={{"color": "var(--current-color)"}} size={30}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"color": "#FFFFFF"}} size={`2`}>
  {`En directo`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB"}} size={`1`}>
  {state__page__state.live_title}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_db062a4b9ef0484aa78b041fe78f93a6 () {
  const state__page__state = useContext(StateContexts.state__page__state)


  return (
    <Fragment>
  {isTrue(state__page__state.is_live) ? (
  <Fragment>
  <RadixThemesLink asChild={true} css={{"borderRadius": "50%", "background": "#9146FF", "position": "absolute", "padding": "0.3rem", "bottom": "0", "right": "0", "text-decoration": "none", "&:hover": "none", "cursor": "url('cursor/cursorclick.png'), pointer"}}>
  <NextLink href={`https://www.twitch.tv/david2405s`} passHref={true}>
  <LucideTwitchIcon css={{"color": "white"}} size={20}>
  {`twitch`}
</LucideTwitchIcon>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_204cac4b30f87b78c0dd9afe96b27742 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "text-decoration": "none", "&:hover": "none", "cursor": "url('cursor/cursorclick.png'), pointer"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/david2405s/`} passHref={true}>
  <RadixThemesButton css={{"padding": "1rem", "width": "100%", "height": "100%", "display": "flex", "alignItems": "center", "justify-content": "start", "whiteSpace": "normal", "color": "#FFFFFF", "background-color": "#171F26", "&:hover": {"background-color": "#087EC4"}, "cursor": "url('cursor/cursorclick.png'), pointer"}} radius={`large`}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`4`}>
  <LucideInstagramIcon css={{"color": "var(--current-color)"}} size={30}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"color": "#FFFFFF"}} size={`2`}>
  {`Instagram`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB"}} size={`1`}>
  {`Cuenta oficial`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_edceee9d53188173110dfc319cbc7e22 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "text-decoration": "none", "&:hover": "none", "cursor": "url('cursor/cursorclick.png'), pointer"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.youtube.com/@d4vid924`} passHref={true}>
  <RadixThemesButton css={{"padding": "1rem", "width": "100%", "height": "100%", "display": "flex", "alignItems": "center", "justify-content": "start", "whiteSpace": "normal", "color": "#FFFFFF", "background-color": "#171F26", "&:hover": {"background-color": "#087EC4"}, "cursor": "url('cursor/cursorclick.png'), pointer"}} radius={`large`}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`4`}>
  <LucideYoutubeIcon css={{"color": "var(--current-color)"}} size={30}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"color": "#FFFFFF"}} size={`2`}>
  {`YouTube`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB"}} size={`1`}>
  {`Tutoriales sobre programación`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Fragment_ac0b06893fc1b15016f3e0532508036d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_966c0378eb9d65bdfb5286644be9b831 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const state = useContext(StateContexts.state)


  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_7f95acf1645cfa0e73b7a5935803984c () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "text-decoration": "none", "&:hover": "none", "cursor": "url('cursor/cursorclick.png'), pointer"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.twitch.tv/david2405s`} passHref={true}>
  <RadixThemesButton css={{"padding": "1rem", "width": "100%", "height": "100%", "display": "flex", "alignItems": "center", "justify-content": "start", "whiteSpace": "normal", "color": "#FFFFFF", "background-color": "#171F26", "&:hover": {"background-color": "#087EC4"}, "cursor": "url('cursor/cursorclick.png'), pointer"}} radius={`large`}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`4`}>
  <LucideTwitchIcon css={{"color": "var(--current-color)"}} size={30}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"color": "#FFFFFF"}} size={`2`}>
  {`Twitch`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB"}} size={`1`}>
  {`Directos sobre programación`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_ccc8739b9797ac615e92fed6865b24af () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "text-decoration": "none", "&:hover": "none", "cursor": "url('cursor/cursorclick.png'), pointer"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.tiktok.com/@davids2405`} passHref={true}>
  <RadixThemesButton css={{"padding": "1rem", "width": "100%", "height": "100%", "display": "flex", "alignItems": "center", "justify-content": "start", "whiteSpace": "normal", "color": "#FFFFFF", "background-color": "#171F26", "&:hover": {"background-color": "#087EC4"}, "cursor": "url('cursor/cursorclick.png'), pointer"}} radius={`large`}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`4`}>
  <LucideMusic2Icon css={{"color": "var(--current-color)"}} size={30}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"color": "#FFFFFF"}} size={`2`}>
  {`Tiktok`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB"}} size={`1`}>
  {`Cortos sobre desarrollo de software y datos curiosos`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_966c0378eb9d65bdfb5286644be9b831/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <RadixThemesBox css={{"align": "center"}}>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang === "es"`}
</Script>
  <RadixThemesFlex align={`start`} css={{"padding": "1rem", "position": "sticky", "top": "0", "zIndex": "9999", "background": "#171F26", "color": "#FFFFFF"}} direction={`row`} justify={`start`} gap={`2`}>
  <Link_2e43ca7e45bbdb194b7fba7089930c67/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`center`} css={{"maxWidth": "38rem", "width": "100%", "marginTop": "3rem", "marginBottom": "3rem", "padding": "1rem"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`column`} justify={`center`} gap={`7`}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`6`}>
  <RadixThemesBox css={{"position": "relative"}}>
  <Fragment_db062a4b9ef0484aa78b041fe78f93a6/>
  <RadixThemesAvatar css={{"width": "auto"}} fallback={`David Basantes`} radius={`full`} size={`6`} src={`https://avatars.githubusercontent.com/u/85196670?v=4`}/>
</RadixThemesBox>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"color": "#FFFFFF", "font-family": "PressStart2P", "font-weight": "normal"}} size={`3`}>
  {`David Basantes`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB"}} size={`2`}>
  {`@david2405`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Link_6bf855c22332ddc310f44965c032d475/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%"}}>
  <RadixThemesFlex align={`center`} css={{"fontSize": "0.75rem", "width": "100%", "color": "#C3C7CB"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`span`} css={{"color": "#087EC4"}} size={`2`}>
  {`1`}
</RadixThemesText>
  {` año de experiencia`}
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`center`} css={{"fontSize": "0.75rem", "width": "100%", "color": "#C3C7CB"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`span`} css={{"color": "#087EC4"}} size={`2`}>
  {`1`}
</RadixThemesText>
  {` año en creación de contenido`}
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <Fragment_72783e110b63502aba5957cd075c8cae/>
  <RadixThemesText as={`p`} css={{"textWrap": "pretty", "color": "#C3C7CB"}} size={`1`}>
  {`Soy desarrollador de software desde hace 1 año.
                Actualmente trabajo como Jr full-stack developer.
                Además creo contenido formativo sobre programación y tecnología en redes.
                Aquí podrás encontrar todas mis redes. ¡Bienvenidos!`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesHeading css={{"width": "100%", "marginTop": "3rem", "color": "#FFFFFF", "font-family": "PressStart2P", "font-weight": "normal"}} size={`4`}>
  {`Comunidad`}
</RadixThemesHeading>
  <Link_7f95acf1645cfa0e73b7a5935803984c/>
  <Link_edceee9d53188173110dfc319cbc7e22/>
  <Link_ccc8739b9797ac615e92fed6865b24af/>
  <RadixThemesHeading css={{"width": "100%", "marginTop": "3rem", "color": "#FFFFFF", "font-family": "PressStart2P", "font-weight": "normal"}} size={`4`}>
  {`Contacto`}
</RadixThemesHeading>
  <Link_bf80e492e22c87b1224b6ba4f9f3480e/>
  <Link_204cac4b30f87b78c0dd9afe96b27742/>
  <Link_e3788ff3eea2776ffdbbbaa23d8d1731/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} css={{"background": "black", "textAlign": "center", "padding": "1rem", "color": "#C3C7CB"}} direction={`column`} justify={`center`} gap={`0`}>
  <RadixThemesText as={`p`} size={`1`}>
  {`© 2024 David. Casi todos los derechos reservados`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`1`}>
  {`Building Software with ❤️ from Ecuador for the world.`}
</RadixThemesText>
  <img/>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`David Basantes - Desarrollador y Programador Web`}
</title>
  <meta content={`Desarrollador Web y Creador de Contenido. Especializado en crear aplicaciones únicas.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
