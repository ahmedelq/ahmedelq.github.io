---
layout: post
title: TIL&#58; defaultdict
author: Ahmed Alq
tags: [python]
comments : true
 

---

One of the things that are very helpful that I just learned: [`defaultdict`](https://docs.python.org/3.9/library/collections.html#collections.defaultdict)

Basically you it takes a base factory or formally `default_factory`, and invokes it for every key assignment even for missing keys.

Previously I was doing something *like this* (for nested dictionaries): 

```python
>>> names = [ ('Qatif', 'Reda'), ('Dammam', 'Mustafa'), ('Khobar', 'Eman'), ('Qatif', 'Abdullah'), ('Khobar', 'Ali')]
>>> normal_dict = {}
>>> for region,name in names:
    	x_names = normal_dict.get(region, [])
    	x_names.append(name)
    	normal_dict[region] = x_names
 >>> normal_dict
{'Qatif': ['Reda', 'Abdullah'],
 'Dammam': ['Mustafa'],
 'Khobar': ['Eman', 'Ali']}
```

Oneliner with `list` as the `default_factory` 😉:

```python
>>> from collections import defaultdict
>>> names = [ ('Qatif', 'Reda'), ('Dammam', 'Mustafa'), ('Khobar', 'Eman'), ('Qatif', 'Abdullah'), ('Khobar', 'Ali')]
>>> default_dict = defaultdict(list)
>>> for region,name in names: default_dict[region].append(name)
>>> default_dict
defaultdict(list,
            {'Qatif': ['Reda', 'Abdullah'],
             'Dammam': ['Mustafa'],
             'Khobar': ['Eman', 'Ali']})
```

Let's try with `int`:

```python
>>> grades = [ ('Ali', 9), ('Mohd', 8), ('Reda', 7), ('Ali', 7), ('Mohd', 5), ('Reda', 6)]
>>> counter_dict = defaultdict(int)
>>> for region,temp in grades: counter_dict[region] += temp
>>> counter_dict
defaultdict(int, {'Ali': 16, 'Mohd': 13, 'Reda': 13})
```

