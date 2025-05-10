def do_nothing():
    pass

do_nothing()





def make_a_sound():
    print('quack')

make_a_sound()





def agree():
    return True

if agree():
    print('agree')




def echo(a):
    return print(a + ' ' + a);
echo('xxx')






def print_args(*args):
    print(args)

print_args(3,2,1,'wait!')





def print_kwargs(**kwargs):
    print(kwargs)

print_kwargs(a='1', b='2')





def a(x):
    def b():
        return x
    return b

print(a('Duck')())
print(a('Quack')())



print(sum(range(1, 101)))


try:
    print(a('a')())
except:
    print('fail')



    
