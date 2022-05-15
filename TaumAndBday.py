b = 3
w = 5
bc = 3
wc = 4
z = 1 

def taumBday(b, w, bc, wc, z):
    return min(b*bc+w*wc,b*bc + w*bc + z*w,w*wc + b*wc + b*z)

console.log(taumBday(b,w,bc,wc,z));