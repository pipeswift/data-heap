

export function chainProperty<R>(path: string, obj): R {
  if (obj == null) return null;
  const properties = path.split(".");
  let result;
  for (let i = 0; i < properties.length; i++) {
    if (properties[i] == null) {
      result = null;
      break;
    }
    if (!result) {
      result = obj[properties[i]]
      continue;
    }
    result = result[properties[i]];
  }
  return result;
}