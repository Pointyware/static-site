

export function selectClass(
  constant: string,
  conditions: Record<string,()=>boolean>
) {
  let result = constant

  for (const className in conditions) {
    const condition = conditions[className]
    if (condition && condition()) {
      result += className + ' '
    }
  }

  return result
}

export function lightDarkClass(
  light: string,
  dark: string
) {
  const obj: Record<string, ()=>boolean> = {}
  obj[light] = ()=>true
  obj[dark] = ()=>false
  return selectClass('', obj)
}