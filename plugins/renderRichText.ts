import Vue from 'vue'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const options = {
  renderNode: {
    'embedded-asset-block': (node: any) =>
      `<figure class="image"><img src="${node.data.target.fields.file.url}?fm=webp" /></figure>`,
  },
}

Vue.prototype.$renderRichText = (doc: any) => documentToHtmlString(doc, options)
