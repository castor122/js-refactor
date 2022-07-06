export const validation = {
  name: {
    required: true,
    msg: () => I18n.t("validations.profiles.name.required")
  },
  slug: (value, attributeName, attributes) => {
    const isValid =
      !!value && URI({ path: value }).normalizePath().path() === value

    if (!isValid) {
      return I18n.t("validations.profiles.slug.path")
    }
  }
}
