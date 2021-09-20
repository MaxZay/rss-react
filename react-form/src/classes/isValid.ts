export const getNameStatus = (name: string) => {
  return /^[А-я\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/gm.test(name)
}

export const getBirthDateStatus = (date: number) => {
  const currentDate = new Date()
  return date >= currentDate.getTime() ? false : true
}
