export const useUrlQuery = <T, K = T | null>(
  url: string | Ref<string>,
  initial: K
) => {
  const result = ref<K>(initial)
  const state = reactive({
    isLoading: false,
    error: null as unknown,
  })

  const reload = async () => {
    state.isLoading = true
    try {
      const res = await fetch(unref(url))
      const data = await res.json()
      result.value = data
    } catch (e) {
      state.error = e
    } finally {
      state.isLoading = false
    }
  }

  if (isRef(url)) {
    watch(url, reload)
  }

  return {
    ...toRefs(state),
    result,
    reload,
  }
}
