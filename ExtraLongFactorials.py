def extraLongFactorials(n):
    if n == 0: return 0
    answer = 1
    while n > 0:
        answer *= n
        n = n - 1
    print(answer)
