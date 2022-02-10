import { NextRequest, NextResponse } from 'next/server'

import * as app from '../constants'

const COOKIE_NAME = 'ab-test-variation'

const chooseVariation = () => {
  const index = Math.floor(Math.random() * app.VARIATIONS.length)
  return app.VARIATIONS[index]
}

export function middleware(req: NextRequest) {
  const variation = req.cookies[COOKIE_NAME] || chooseVariation()
  const res = NextResponse.rewrite(`/${variation}`)

  res.cookie(COOKIE_NAME, variation)

  return res
}
