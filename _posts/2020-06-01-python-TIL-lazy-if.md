---
layout: post
title: Lazy vs. eager if statement in python
author: Ahmed Alq
tags: [TIL, python]
comments : true
 

---

This is a basic concept in python (and Java) and I think other programming languages as well. It is pretty straight-forward and self-explanatory: 

## Lazy evaluation (Short-circuit)

```python
>>> empty_dict = {}
>>> if empty_dict and empty_dict['key']: 
		# No KeyError, since the second expression will not be evaluated.
	 	pass
```

## Eager evaluation

```python
>>> if empty_dict & empty_dict['key']:
    pass

Traceback (most recent call last):
File "<stdin>", line 1, in <module>
KeyError: 'key'
```



## Further reading

* https://en.wikipedia.org/wiki/Lazy_evaluation