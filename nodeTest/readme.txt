1、mkdir 创建文件夹来存放远程项目

2、克隆项目到本地文件夹
git clone URL

3、进入到本地项目托管文件夹  cd 文件名

4、git add .  将改动的地方添加到版本管理器:.是代表把所有的添加到版本管理器，可直接添加文件名：git add 2.js

5、git  commit -m "changes log"  
提交到本地的版本控制库里，
引号里面是你对本次提交的说明信息。如果要把引号里面的改为中文需要设置字体格式

6、git push -u origin master  
将你本地的仓库提交到你的github账号里，
此时会要求你输入你的github的账号和密码。



获取远程指定文件：git checkout feature1 REDME.TXT  


