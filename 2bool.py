print(bool(True))       # True
print(bool(1))          # True
print(bool(45))         # True
print(bool(-45))        # True
print(bool([1, 2]))  # True
print(bool("x"))    # True
print(bool({1: "x"})) # True

print(bool(False))      # False
print(bool(None))       # False
print(bool(0))          # False
print(bool(0.0))        # False
print(bool({}))         # False
print(bool([]))         # False
print(bool(""))         # False
print(bool(()))         # False
print(bool(set()))      # False
