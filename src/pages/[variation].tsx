import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'node:querystring'

import * as app from '../constants'

type Props = {
  message: string
}

interface Params extends ParsedUrlQuery {
  variation: string
}

const Index: React.FC<Props> = ({ message }) => (
  <div>
    <h1>{message}</h1>
  </div>
)

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: app.VARIATIONS.map((variation) => ({ params: { variation } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const variation = `${params?.variation}`
  const message = `TEST ${variation?.toUpperCase()}`
  return { props: { message } }
}

export default Index
