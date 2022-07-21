import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement } from "react"

export type LayoutProps = {
    children : React.ReactNode
}

export type NextPageWithLayout = NextPage & {
    Layout? : (page: LayoutProps) => ReactElement<string>
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}