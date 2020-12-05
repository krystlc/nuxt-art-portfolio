/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import { Module } from '@nuxt/types'
import { createClient } from 'contentful'
require('dotenv').config()

const config = {
  space: process.env.CONTENTFUL_SPACE || '',
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN || '',
}

const client = createClient(config)

const getContent: Module = function () {
  const types: string[] = ['page', 'landingPage', 'collection']
  this.nuxt.hook('generate:before', async () => {
    // This will be called before Nuxt generates your pages
    console.log('> Starting import...')
    for (const type of types) {
      console.log('> Getting content for', type)
      const entries = await client.getEntries({
        content_type: type,
        include: 3,
      })
      if (entries.total > 0) {
        fs.promises
          .mkdir(path.join(__dirname, '..', 'static/data'), { recursive: true })
          .catch((err) => {
            console.log('caught exemption: ', err.message)
          })
        fs.writeFileSync(
          path.join(__dirname, '..', 'static/data', `${type}.json`),
          JSON.stringify(entries.items)
        )
        console.log('> Content gotten and written for', type)
      }
    }
    return true
  })
}

export default getContent
