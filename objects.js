function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

const receipt = {eggs: 3}

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')