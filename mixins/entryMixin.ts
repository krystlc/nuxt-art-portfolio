import Vue from 'vue'

export default Vue.extend({
  computed: {
    title(): string {
      return (this as any).entry.fields.title
    },
    description(): string {
      return (this as any).entry.fields.description
    },
    body(): any {
      return this.$renderRichText((this as any).entry.fields.body)
    },
    cover(): string | boolean {
      if (
        (this as any).entry.fields.cover &&
        (this as any).entry.fields.cover.fields
      ) {
        return (this as any).entry.fields.cover.fields.file.url
      } else {
        return false
      }
    },
    blocks(): any[] {
      return (this as any).entry.fields.block.map((block: any) => {
        return {
          headline: block.fields.headline,
          cover: block.fields.cover.fields.file.url,
          body: this.$renderRichText(block.fields.body),
        }
      })
    },
    date(): string {
      return (this as any).entry.fields.date
        ? (this as any).entry.fields.date
        : (this as any).entry.sys.updatedAt
    },
  },
  head() {
    return {
      title: (this as any).title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: (this as any).description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: (this as any).description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: (this as any).title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https:${(this as any).cover}`,
        },
      ],
    }
  },
})
