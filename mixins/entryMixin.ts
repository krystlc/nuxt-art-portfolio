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
