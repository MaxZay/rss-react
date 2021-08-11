class IsValid {
  public static getNameStatus(name: string) {
    return /^[А-я\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/gm.test(
      name
    )
  }

  public static getBirthDateStatus(date: number) {
    const currentDate = new Date()
    return date >= currentDate.getTime() ? false : true
  }
}

export default IsValid
