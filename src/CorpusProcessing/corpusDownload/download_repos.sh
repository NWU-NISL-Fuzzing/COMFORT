# Download the github repository and rename it
cat top2000Repos.txt | while read line; 
do
    str="$line"

    # 字符串拆分，得到三项数据
    arr=(${str//,/ })
    idx="${arr[0]}"
    repo="${arr[1]}"
    download_path="${arr[2]}"

    # 根据数据下载仓库
    git clone --depth 1 $download_path   # --depth 1: 不下载 .git文件

    # 进入目录之前，要先判断是否存在。
    if [ -d $repo ];then
        mv $repo $idx
    fi
done
