```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /*filter*/ }},
  {$group: {_id: '$fieldName', total: {$sum: '$fieldValue'}}}, //Corrected grouping
  {$sort: {total: -1}},
  {$limit: 10}
]);
```