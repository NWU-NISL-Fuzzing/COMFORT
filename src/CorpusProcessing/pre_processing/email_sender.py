# -*- coding: utf-8 -*-
# 
# @Version: python 3.7
# @File: email_sender.py
# @Author: ty
# @E-mail: nwu_ty@163.com
# @Time: 2020/2/4
# @Description: 用来在测出crash(returncode<=-11的用例)之后，给我邮件通知
# @Input:
# @Output:
#

import os
import smtplib
import sys

from email import encoders
from email.header import Header
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.utils import parseaddr, formataddr


def _format_addr(s):
    # 格式化地址
    name, addr = parseaddr(s)
    return formataddr((Header(name, 'utf-8').encode(), addr))


# 使用qq邮箱向，163邮箱发送
class email_sender():
    def __init__(self, user_list):
        self.user_list = user_list
        self.send_user = "1059252359@qq.com"    # 发件邮箱地址，收件邮箱请将此加入白名单
        self.password = "wvfmbswxkqkibbcj"    # 发件邮箱的授权码(不是邮箱密码，需要在邮箱设置中取得)
        self.email_host = "smtp.qq.com"     # 发件邮箱的服务器地址，qq是'smtp.qq.com', 163是'smtp.163.com'

    def send_mail(self, sub, content):
        # 创建一个带附件的实例
        message = MIMEMultipart()
        message['From'] = _format_addr('PoolFuzzer_监视器 <%s>' % self.send_user)    # 发件人
        message['To'] = ";".join(self.user_list)    # 收件人
        message['Subject'] = sub    # 主题

        # 邮件正文内容
        message.attach(MIMEText(content, 'plain', 'utf-8'))

        # 构造附件（这里的附件为json格式的纯text文本）
        '''with open(file_path, 'r', encoding='utf-8') as f:
            print(file_path)
            file_name = str(os.path.basename(file_path))
            mime = MIMEBase('text', 'plain', filename=file_name)
            # 加上必要的头信息:
            mime.add_header('Content-Disposition', 'attachment', filename=file_name)
            mime.add_header('Content-ID', '<0>')
            mime.add_header('X-Attachment-Id', '0')
            # 把附件的内容读进来:
            mime.set_payload(f.read())
            # 用Base64编码:
            encoders.encode_base64(mime)
            # 添加到MIMEMultipart:
            message.attach(mime)'''

        #发送
        try:
            server = smtplib.SMTP(self.email_host, 25)
            server.set_debuglevel(1)
            server.login(self.send_user, self.password)
            server.sendmail(self.send_user, self.user_list, message.as_string())
            server.quit()
        except Exception:
            print('哦豁, 由于未知原因邮件发送失败. ERRORCODE: 250')    # VPN服务器无法输出中文，故加上错误码

    def send_main(self):
        sub = f"[程序执行完啦]"    # 邮件标题
        content = "%s" % sys.argv[0]    # 邮件正文内容
        self.send_mail(sub, content)
