## 分支
[详细](http://git.oschina.net/progit/3-Git-分支.html)
#### 分支的新建
```
//新建
 git branch [branch's name]
 //切换
 git checkout [branch's name]
 //分支列表
 git branch
```

#### 分支的新建与合并
```
//分支的新建与切换 创建 iss53 分支，并切换到 iss53 分支
$ git checkout -b iss53
等同于
//
$ git branch iss53
$ git checkout iss53
```
>注：
* 不过在此之前，留心你的暂存区或者工作目录里，那些还没有提交的修改，它会和你即将检出的分支产生冲突从而阻止 Git 为你切换分支  
* 切换分支的时候最好保持一个清洁的工作区域
* 几个绕过这种问题的办法（分别叫做 stashing 和 commit amending）
* 
#### 合并
```
首先切换到 master 分支 也就是你要合并过去的主分支
git checkout master
//合并
git merge [branch's name]
```
>注请注意，合并时出现了“Fast forward”的提示。由于当前 master 分支所在的提交对象是要并入的 hotfix 分支的直接上游，Git 只需把 master 分支指针直接右移。换句话说，如果顺着一个分支走下去可以到达另一个分支的话，那么 Git 在合并两者时，只会简单地把指针右移，因为这种单线的历史分支不存在任何需要解决的分歧，所以这种合并过程可以称为快进（Fast forward）。
#### 删除
```
//合并之后可以删除了
git branch -d [branch's name]
//然后回到自己的分支继续工作
git checkout iss5
```
#### 遇到冲突时的分支合并
如下过程：  
iss5 master分支的合并  
在问题 iss5 相关的工作完成之后，可以合并回 master 分支。实际操作同前面合并 hotfix 分支差不多，只需回到 master 分支，运行 git merge 命令指定要合并进来的分支：
![image](http://git.oschina.net/progit/figures/18333fig0315-tn.png)  
请注意，这次合并操作的底层实现，并不同于之前 hotfix 的并入方式。因为这次你的开发历史是从更早的地方开始分叉的。由于当前 master 分支所指向的提交对象（C4）并不是 iss53 分支的直接祖先，Git 不得不进行一些额外处理。就此例而言，Git 会用两个分支的末端（C4 和 C5）以及它们的共同祖先（C2）进行一次简单的三方合并计算。图 3-16 用红框标出了 Git 用于合并的三个提交对象：
![image](http://git.oschina.net/progit/figures/18333fig0316-tn.png)  
图 3-16. Git 为分支合并自动识别出最佳的同源合并点。  

这次，Git 没有简单地把分支指针右移，而是对三方合并后的结果重新做一个新的快照，并自动创建一个指向它的提交对象（C6）（见图 3-17）。这个提交对象比较特殊，它有两个祖先（C4 和 C5）。

值得一提的是 Git 可以自己裁决哪个共同祖先才是最佳合并基础；这和 CVS 或 Subversion（1.5 以后的版本）不同，它们需要开发者手工指定合并基础。所以此特性让 Git 的合并操作比其他系统都要简单不少。
![image](http://git.oschina.net/progit/figures/18333fig0317-tn.png)  
图 3-17. Git 自动创建了一个包含了合并结果的提交对象。  

既然之前的工作成果已经合并到 master 了，那么 iss53 也就没用了。你可以就此删除它，并在问题追踪系统里关闭该问题。
```
git branch -d iss53
```
**在此过程中 遇到冲突时的分支合并**  
有时候合并操作并不会如此顺利。如果在不同的分支中都修改了同一个文件的同一部分，Git 就无法干净地把两者合到一起（译注：逻辑上说，这种问题只能由人来裁决。）。如果你在解决问题 #53 的过程中修改了 hotfix 中修改的部分，将得到类似下面的结果：
```
 git merge iss53
    Auto-merging index.html
    CONFLICT (content): Merge conflict in index.html
    Automatic merge failed; fix conflicts and then commit the result.
```
Git 作了合并，但没有提交，它会停下来等你解决冲突。要看看哪些文件在合并时发生冲突，可以用 git status 查阅：
```
[master*]$ git status
    index.html: needs merge
    # On branch master
    # Changes not staged for commit:
    # (use "git add <file>..." to update what will be committed)
    # (use "git checkout -- <file>..." to discard changes in working directory)
    #
    # unmerged: index.html
    #
```
任何包含未解决冲突的文件都会以未合并（unmerged）的状态列出。Git 会在有冲突的文件里加入标准的冲突解决标记，可以通过它们来手工定位并解决这些冲突。可以看到此文件包含类似下面这样的部分：
```
<<<<<<< HEAD:index.html
    <div id="footer">contact : email.support@github.com</div>
    =======
    <div id="footer">
    please contact us at support@github.com
    </div>
    >>>>>>> iss53:index.html
```
可以看到 ======= 隔开的上半部分，是 HEAD（即 master 分支，在运行 merge 命令时所切换到的分支）中的内容，下半部分是在 iss53 分支中的内容。解决冲突的办法无非是二者选其一或者由你亲自整合到一起。比如你可以通过把这段内容替换为下面这样来解决：
```
<div id="footer">
    please contact us at email.support@github.com
    </div>
```
这个解决方案各采纳了两个分支中的一部分内容，而且我还删除了 <<<<<<<，======= 和 >>>>>>> 这些行。  
git add 将把它们标记为已解决状态（译注：实际上就是来一次快照保存到暂存区域。）。因为一旦暂存，就表示冲突已经解决。

```
git add
```
如果你想用一个有图形界面的工具来解决这些问题，不妨运行 git mergetool，它会调用一个可视化的合并工具并引导你解决所有冲突：
```
 git mergetool
    merge tool candidates: kdiff3 tkdiff xxdiff meld gvimdiff opendiff emerge vimdiff
    Merging the files: index.html

    Normal merge conflict for 'index.html':
    {local}: modified
    {remote}: modified
    Hit return to start merge resolution tool (opendiff):
```
再运行一次 git status 来确认所有冲突都已解决：
```
 git status
    # On branch master
    # Changes to be committed:
    # (use "git reset HEAD <file>..." to unstage)
    #
    # modified: index.html
    #
```
如果觉得满意了，并且确认所有冲突都已解决，也就是进入了暂存区，就可以用 git commit 来完成这次合并提交。提交的记录差不多是这样：
```
Merge branch 'iss53'

    Conflicts:
    index.html
    #
    # It looks like you may be committing a MERGE.
    # If this is not correct, please remove the file
    # .git/MERGE_HEAD
    # and try again.
    #
```
>如果想给将来看这次合并的人一些方便，可以修改该信息，提供更多合并细节。比如你都作了哪些改动，以及这么做的原因。有时候裁决冲突的理由并不直接或明显，**有必要略加注解**。
#### 分支的管理
git branch 命令不仅仅能创建和删除分支，如果不加任何参数，它会给出当前所有分支的清单：
```
$ git branch
    iss53
    * master
    testing
```
注意看 master 分支前的 * 字符：它表示当前所在的分支  
若要查看各个分支最后一个提交对象的信息，运行 git branch -v：
```
$ git branch -v
    iss53 93b412c fix javascript issue
    * master 7a98805 Merge branch 'iss53'
    testing 782fd34 add scott to the author list in the readmes
```
要从该清单中筛选出你已经（或尚未）与当前分支合并的分支，可以用 --merge 和 --no-merged 选项（Git 1.5.6 以上版本）。比如用 git branch --merge 查看哪些分支已被并入当前分支（译注：也就是说哪些分支是当前分支的直接上游。）：
```
$ git branch --merged
    iss53
    * master
```
之前我们已经合并了 iss53，所以在这里会看到它。一般来说，列表中没有 * 的分支通常都可以用 git branch -d 来删掉。原因很简单，既然已经把它们所包含的工作整合到了其他分支，删掉也不会损失什么。  

另外可以用 git branch --no-merged 查看尚未合并的工作：
```
$ git branch --no-merged
    testing
```
它会显示还未合并进来的分支。由于这些分支中还包含着尚未合并进来的工作成果，所以简单地用 git branch -d 删除该分支会提示错误，因为那样做会丢失数据：  
```
 git branch -d testing
    error: The branch 'testing' is not an ancestor of your current HEAD.
    If you are sure you want to delete it, run 'git branch -D testing'.
```
不过，如果你确实想要删除该分支上的改动，可以用大写的删除选项 -D 强制执行，就像上面提示信息中给出的那样。
```
git branch -D testing
```




