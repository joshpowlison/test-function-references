# Test Function References

Tests if function references in JS are the same.

You can download and run the test yourself by running `node script` in the download folder.

# Results

If you'd rather not download and test for yourself, here are the results:

```
Class Instance A localFunction === Class Instance A localFunction? true
Class Instance A localFunction === Class Instance B localFunction? true
Class Instance A localFunction === Class Instance A localFunction+bind(null)? false
Class Instance A localFunction === Class Instance A localFunction+bind(self)? false
Class Instance A localFunction+bind(null) === Class Instance A localFunction+bind(null)? false
Class Instance A localFunction+bind(self) === Class Instance A localFunction+bind(self)? false
Class Instance A localFunction+bind(self) === Class Instance B localFunction+bind(self)? false
Function Instance A localFunction === Function Instance A localFunction? true
Function Instance A localFunction === Function Instance B localFunction? false
Function Instance A localFunction === Function Instance A localFunction+bind(null)? false
Function Instance A localFunction === Function Instance A localFunction+bind(self)? false
Function Instance A localFunction+bind(null) === Function Instance A localFunction+bind(null)? false
Function Instance A localFunction+bind(self) === Function Instance A localFunction+bind(self)? false
Function Instance A localFunction+bind(self) === Function Instance B localFunction+bind(self)? false
StaticFunction === StaticFunction? true
StaticFunction === StaticFunction.bind(null)? false
StaticFunction === StaticFunction.bind(null)? false
StaticFunction === StaticFunction.bind(Class Instance A)? false
StaticFunction.bind(Class Instance A) === StaticFunction.bind(Class Instance A)? false
```