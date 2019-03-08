## 解决冲突
#### 常用命令
- git bash
```
git pull
//修改后在提交
git add [file]
git commit -m 'msg'
git push
```
>回到历史

```
假如现在是2.0版本代码，想回到1.2版本，使用
//查看1.2版本的commitID  
git log
//然后用 回到1.2这个版本，
git reset --hard commitID 
//回到1.2版本以后，又想回到2.0版本怎么办，那就用
// 查看2.0版本的commitID  
git reflog 
//然后回到2.0版本。
git reset --hard commitID  
```

