/// <reference types="next" />
/// <reference types="next/types/global" />

type PageAdditionalProps = {
  layout?: import('react').ComponentType
}

declare type AppProps =
  import('next/dist/next-server/lib/router/router').AppProps & {
    Component: React.ComponentType & PageAdditionalProps
  }

declare type NextPage<P = {}, IP = P> = import('next').NextPage<P, IP> &
  PageAdditionalProps
