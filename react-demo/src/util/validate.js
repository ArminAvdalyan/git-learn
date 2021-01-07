export const Validate = (value) => {
  if (!value) {
    return {
      errorText: "Name is required",
      isValid: false,
    }
  } else {
    return {
      isValid: true,
    }
  }
}
