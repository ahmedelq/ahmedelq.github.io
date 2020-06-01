---
layout: post
title: if statement lazy evaluation in python
author: Ahmed Alq
tags: [python]
comments : true
 

---

This is pretty straight-forward and self-explanatory: 

## Short-circuit

```python
>>> empty_dict = {}
>>> if empty_dict and empty_dict['key']: 
		# No KeyError, since the second expression will not be evaluated.
	 	pass
```

This applies to any() and all() as well. 

## "Eager" evaluation 

These actually are used for bitwise operation, but can achieve the desired results. 

```python
>>> if empty_dict & empty_dict['key']:
    pass

Traceback (most recent call last):
File "<stdin>", line 1, in <module>
KeyError: 'key'
```



## Further reading

* [Short-circuit evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation)
* [Official docs](https://docs.python.org/3/reference/expressions.html#binary-bitwise-operations