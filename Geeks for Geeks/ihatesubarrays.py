for _ in range(int(input())):
    case = input()
    ans = []
    top = -1
    for i in range(len(case)):
        if top == -1:
            ans.append(case[i])
            top += 1
        else:
            if ans[top] == case[i]:
                top -= 1
                ans.pop()
            else:
                ans.append(case[i])
                top += 1
    if len(ans) < 1:
        print("KHALI")
    else:
        print("".join(ans))