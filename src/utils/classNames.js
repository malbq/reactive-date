export default function classNames(...classes) {
  return classes
    .filter((item) => Boolean(item))
    .map((item) => {
      if (Array.isArray(item)) {
        return classNames(...item)
      }
      if (typeof item === 'object') {
        return classNames(
          ...(Object.entries(item)
            .filter(([, condition]) => condition)
            .map(([key]) => key)),
        )
      }
      return item.trim()
    })
    .filter((item) => item.length)
    .join(' ')
}
