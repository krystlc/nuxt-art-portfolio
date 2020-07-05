import entryMixin from '~/mixins/entryMixin'

export default entryMixin.extend({
  computed: {
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
  },
})
