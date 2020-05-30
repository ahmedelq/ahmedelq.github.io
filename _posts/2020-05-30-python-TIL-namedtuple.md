---
layout: post
title: TIL: Named tuples
author: Ahmed Alq
tags: [TIL]
comments : true
---

**Main purpose**: To improve readability, handy for CSV manipulation.
Just as normal tuples, named tuples are immutable; can't be changed.

```python
>>> from collections import namedtuple
>>> import json
>>> Person = namedtuple('Person', ['name','age'])
>>> p1 = Person('ali', 30)
>>> p1
'["ali", 30]'
>>> json.dumps(p1._asdict())
'{"name": "ali", "age": 30}'
```

## Further reading 

* [Official documentation](https://docs.python.org/3/library/collections.html#collections.namedtuple)
* [Writing Clean Python With Namedtuples](https://dbader.org/blog/writing-clean-python-with-namedtuples)