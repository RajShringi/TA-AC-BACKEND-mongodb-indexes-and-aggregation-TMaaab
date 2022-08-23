writeCode

Q1. Design database model using mongoose to replicate data structure of `STACK OVERFLOW` and add appropriate indexes to support the queries.

Stack Overflow consists of

- Users
- Questions
- Answers
- REPLY'S on Question/Answers
- Up/Down vote on Questions/Answers/Replies
- Tags on Questions
- Views on Questions
- Reputation for each user based on questions asked, answers given, upvotes

Design models for storing these data and associate them accordingly to fetch related data together.

Use indexes to support queries related to questions, tags etc..

Q2. Use aggregation framework to

- Get array of all the tags used in the questions

```
db.tags.find();

```

- Get total questions count

```
db.questions.aggregate([
    { $group: { _id: "null", count: { $sum: 1 } } }
]);

```

- Total answers count overall and question specific as well

```
db.answers.aggregate([
    { $group: { _id: "null", count: { $sum: 1 } } }
]);

db.answers.aggregate([
{$group: {'_id': '$questionId', count: {$sum: 1}}}
])
```

- Count total reputation of a user
- total views on a particular day
- Count total answer by a particular user

```
db.answers.aggregate([
{$group: {'_id': '$author', count: {$sum: 1}}}
])
```