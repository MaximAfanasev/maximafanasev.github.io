print(bool(True))       # True
print(bool(1))          # True
print(bool(45))         # True
print(bool(-45))        # True
print(bool([1, 2, 3]))  # True
print(bool("Hello"))    # True
print(bool({1: "one"})) # True

print(bool(False))      # False
print(bool(None))       # False
print(bool(0))          # False
print(bool(0.0))        # False
print(bool({}))         # False
print(bool([]))         # False
print(bool(""))         # False
print(bool(()))         # False
print(bool(set()))      # False
