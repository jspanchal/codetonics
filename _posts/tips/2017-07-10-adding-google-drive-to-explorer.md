---
title: "Adding Google Drive to Windows Explorer Sidebar"
category: "tips"
tags: ["Tips", "Windows", "Google Drive"]
---

I recently started using **Google Drive** to store my stuffs. Just installed it on my windows machine and to my wonder, Google Drive folder shortcut doesn't exists in Windows Explorer Sidebar as OneDrive or Dropbox or Box.

After few google searched and tinkering with Windows Registry, I found a perfect solution which I am sharing here.

Here are the steps

1. Download [Add Google Drive to Windows Explorer File](/download/add-google-drive-to-windows-explorer-sidebar.reg)

2. Open ```add-google-drive-to-windows-explorer-sidebar.reg``` file with notepad which you have just downloaded and update the ```%PATH_TO_GOOGLE_DRIVE%``` values for target folder path i.e. path of Google Drive folder.
For example: If Google Drive folder is located at ```"D:\Google Drive"``` then replace ```%PATH_TO_GOOGLE_DRIVE%``` with ```"D:\\Google Drive"```.

3. Save changes.

4. Double click the file to add it to registry. Make sure you click yes when prompted.

You should now see Google Drive pinned to the explorer sidebar.

![adding-google-drive-to-windows-explorer-sidebar](/image/add-google-drive-to-windows-explorer-sidebar.png)

Enjoy.