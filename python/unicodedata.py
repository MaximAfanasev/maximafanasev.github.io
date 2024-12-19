def unicode_test(value):
    import unicodedata
    name = unicodedata.name(value)
    v2 = unicodedata.lookup(name)
    print(value='%s', name = '%s', value2="%s"%(value,name,value2))
