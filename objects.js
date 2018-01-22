function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
 
  return obj;
}
 
const recipe = { eggs: 3 };
 
destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups');

Object.assign({}, {foo: 'bar'});

Object.assign({eggs: 3}, {flour: '1 cup'});

Object.assign({eggs:3}, {chocolate: '1 cup', flour: '2 cups'}, {flour: '1/2 cup'});