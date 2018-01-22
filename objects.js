Object.assign({}, {foo: 'bar'});

Object.assign({eggs: 3}, {flour: '1 cup'});

Object.assign({eggs:3}, {chocolate: '1 cup', flour: '2 cups'}, {flour: '1/2 cup'});

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

const recipe = { eggs: 3 };
 
 
 