// Mixins are basically for share code between components
export const bandMixin = {
  data () {
    return {
      bands: ['Black Sabbath', 'Pink Floyd', 'Eric Clapton', 'Queen'],
      filteredText: ''
    }
  },
  computed: {
    filteredBands() {
      return this.bands.filter((elem) => {
        return elem.match(this.filteredText);
      });
    }
  }
}
