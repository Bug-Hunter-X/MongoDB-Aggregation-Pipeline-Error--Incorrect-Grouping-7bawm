```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /*filter*/ }},
  {$group: {_id: '$fieldName', sum: {$sum: '$fieldValue'}}}, //Incorrect grouping
  {$sort: {sum: -1}},
  {$limit: 10}
]);
```