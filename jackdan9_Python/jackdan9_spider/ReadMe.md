---
title: jackdan9_spider
tags: jackdan9, scrapy, spider
author: jackdan9
---
# A project of scrapy!
## `extract()`:
### Function function:
- Call the ``.extract()`` method for each element is this list and return their results flattened, as a list of unicode strings.

------

## `extract_first()`:
### Function function:
- Return the result of ``.extract()`` for the first element in this list.
- If the list is empty, return the default value.

------

## `xpath(self, xpath, namespaces=None, **kwargs)`:
### Function function:
- Call the ``.xpath()`` method for each element in this list and return their results flattened as another :class:`SelectorList`.
- ``query`` is the same argument as the one in :meth:`Selector.xpath`
- ``namespaces`` is an optional ``prefix: namespace-uri`` mapping (dict) for additional prefixes to those registered with ``register_namespace(prefix, uri)``.
- Contrary to ``register_namespace()``, these prefixes are not saved for future calls.
- Any additional named arguments can be used to pass values for XPath variables in the XPath expression, e.g.::
    - selector.xpath('//a[href=$url]', url="http://www.example.com")

------

## `xpath(self, query, namespaces=None, **kwargs)`:
### Function function:
- Find nodes matching the xpath ``query`` and return the result as a :class:`SelectorList` instance with all elements flattened.
- List elements implement :class:`Selector` interface too.
- ``query`` is a string containing the XPATH query to apply.
- ``namespaces`` is an optional ``prefix: namespace-uri`` mapping (dict) for additional prefixes to those registered with ``register_namespace(prefix, uri)``.
- Contrary to ``register_namespace()``, these prefixes are not saved for future calls.
- Any additional named arguments can be used to pass values for XPath variables in the XPath expression, e.g.::
    - selector.xpath('//a[href=$url]', url="http://www.example.com")