export const state = () => ({
  loading: false,
})

export const mutations = {
  setLoading(state, data) {
    state.loading = data
  },
}
