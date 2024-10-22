---
title: python常见的加解密
date: 2022-02-02
tag:
- aes
- python
category:
- python
---
# 
## urlencode加密

```python
# urlencode加密
import urllib.parse

text = "我爱吃鸡腿"
s = urllib.parse.quote(text)
print(s) # %E6%88%91%E7%88%B1%E5%90%83%E9%B8%A1%E8%85%BF
u = urllib.parse.unquote(s)
print(u) #我爱吃鸡腿
````

## unicode加密

```python
str1 = "你好"
# 编码
enStr1 = str1.encode('unicode-escape').decode()
print(enStr1) # \u4f60\u597d

# 解码
deStr1 = enStr1.encode().decode('unicode-escape')
print(deStr1) # 你好
```

## Base64加密

```python
import base64

def base64_encode(text):
    encode_data = base64.b64encode(text.encode())
    return encode_data

def base64_decode(encode_data):
    decode_data = base64.b64decode(encode_data)
    return decode_data

if __name__ == '__main__':
    text = 'I love Python!'
    encode_data = base64_encode(text)
    decode_data = base64_decode(encode_data)
    print('Base64 编码：', encode_data)
    print('Base64 解码：', decode_data)

    # Base64 编码： b'SSBsb3ZlIFB5dGhvbiE='
# Base64 解码： b'I love Python!'
```

## MD5

```python
import hashlib

def md5_test1():
    md5 = hashlib.new('md5', 'I love python!'.encode('utf-8'))
    print(md5.hexdigest())

def md5_test2():
    md5 = hashlib.md5()
    md5.update('I love '.encode('utf-8'))
    md5.update('python!'.encode('utf-8'))
    print(md5.hexdigest())

if __name__ == '__main__':
    md5_test1()  # 21169ee3acd4a24e1fcb4322cfd9a2b8
    md5_test2()  # 21169ee3acd4a24e1fcb4322cfd9a2b8
```

## PBKDF2
简介：英文名称：Password-Based Key Derivation Function 2，
PBKDF2 是 RSA 实验室的公钥加密标准（PKCS）系列的一部分，
2017 年发布的 RFC 8018 （PKCS #5 v2.1）推荐使用 PBKDF2 进行密码散列。
PBKDF2 将伪随机函数（例如 HMAC），
把明文和一个盐值（salt）作为输入参数，然后进行重复运算，并最终产生密钥，
如果重复的次数足够大，破解的成本就会变得很高。

```python
import binascii
from Cryptodome.Hash import SHA1
from Cryptodome.Protocol.KDF import PBKDF2

text = 'I love Python!'
salt = b'43215678'
result = PBKDF2(text,  salt, count=10, hmac_hash_module=SHA1)
result = binascii.hexlify(result)
print(result)
```

## SHA

简介：全称安全哈希算法（英文名称：Secure Hash Algorithm），
由美国国家安全局（NSA）所设计，主要适用于数字签名标准
（Digital Signature Standard DSS）里面定义的数字签名算法（
Digital Signature Algorithm DSA），SHA 通常指 SHA 家族的五个算法，
分别是 SHA-1、SHA-224、SHA-256、SHA-384、SHA-512，
后四者有时并称为 SHA-2，SHA 是比 MD5 更安全一点的摘要算法，
MD5 的密文是 32 位，而 SHA-1 是 40 位，
版本越强，密文越长，代价是速度越慢。

```python
import hashlib

def sha1_test1():
    sha1 = hashlib.new('sha1', 'I love python!'.encode('utf-8'))
    print(sha1.hexdigest())

def sha1_test2():
    sha1 = hashlib.sha1()
    sha1.update('I love python!'.encode('utf-8'))
    print(sha1.hexdigest())

if __name__ == '__main__':
    sha1_test1()  # 23c02b203bd2e2ca19da911f1d270a06d86719fb
    sha1_test2()  # 23c02b203bd2e2ca19da911f1d270a06d86719fb
```

## HMAC

简介：全称散列消息认证码、密钥相关的哈希运算消息认证码
（英文名称：Hash-based Message Authentication Code 或者 Keyed-hash Message Authentication Code），
于 1996 年提出，1997 年作为 RFC 2104 被公布，HMAC 加密算法是一种安全的基于加密 Hash
函数和共享密钥的消息认证协议，它要求通信双方共享密钥 key、约定算法、
对报文进行 Hash 运算，形成固定长度的认证码。通信双方
通过认证码的校验来确定报文的合法性。

```python
import hmac

def hmac_test1():
    message = b'I love python!'
    key = b'secret'
    md5 = hmac.new(key, message, digestmod='MD5')
    print(md5.hexdigest())

def hmac_test2():
    key = 'secret'.encode('utf8')
    sha1 = hmac.new(key, digestmod='sha1')
    sha1.update('I love '.encode('utf8'))
    sha1.update('Python!'.encode('utf8'))
    print(sha1.hexdigest())

if __name__ == '__main__':
    hmac_test1()  # 9c503a1f852edcc3526ea56976c38edf
    hmac_test2()  # 2d8449a4292d4bbeed99ce9ea570880d6e19b61a
```

## DES

简介：全称数据加密标准（英文名称：Data Encryption Standard），加密与解密使用同一密钥，
属于对称加密算法，1977 年被美国联邦政府的国家标准局确定为联邦资料处理标准（FIPS），
DES 是一个分组加密算法，使用 56 位的密钥（一般认为密钥是 64 位，
但是密钥的每个第 8 位设置为奇偶校验位，所以实际上有效位只有 56 位），
由于 56 位密钥长度相对较短，所以 DES 是不安全的，现在基本上已被更高级的加密标准 AES 取代。

mode 支持：CBC，CFB，CTR，CTRGladman，ECB，OFB 等。

padding 支持：ZeroPadding，NoPadding，AnsiX923，Iso10126，Iso97971，Pkcs7 等。

```python
import binascii
# 加密模式 CBC，填充方式 PAD_PKCS5
from pyDes import des, CBC, PAD_PKCS5

def des_encrypt(key, text, iv):
    k = des(key, CBC, iv, pad=None, padmode=PAD_PKCS5)
    en = k.encrypt(text, padmode=PAD_PKCS5)
    return binascii.b2a_hex(en)

def des_decrypt(key, text, iv):
    k = des(key, CBC, iv, pad=None, padmode=PAD_PKCS5)
    de = k.decrypt(binascii.a2b_hex(text), padmode=PAD_PKCS5)
    return de

if __name__ == '__main__':
    secret_key = '12345678'   # 密钥
    text = 'I love Python!'   # 加密对象
    iv = secret_key           # 偏移量
    secret_str = des_encrypt(secret_key, text, iv)
    print('加密字符串：', secret_str)
    clear_str = des_decrypt(secret_key, secret_str, iv)
    print('解密字符串：', clear_str)

    # 加密字符串： b'302d3abf2421169239f829b38a9545f1'
    # 解密字符串： b'I love Python!'
```

## 3DES

简介：全称三重数据加密算法（英文名称：Triple Data Encryption Standard、
Triple Data Encryption Algorithm、TDES、TDEA），是对称加密算法中的一种。
70 年代初由 IBM 研发，后 1977 年被美国国家标准局采纳为数据加密标准，
它相当于是对每个数据块应用三次 DES 加密算法。由于计算机运算能力的增强，
原版 DES 密码的密钥长度变得容易被暴力破解；3DES 即是设计用来提供一种相对简单的方法，
即通过增加 DES 的密钥长度来避免破解，所以严格来说 3DES 不是设计一种全新的块密码算法。

mode 支持：CBC，CFB，CTR，CTRGladman，ECB，OFB 等。

padding 支持：ZeroPadding，NoPadding，AnsiX923，Iso10126，Iso97971，Pkcs7 等。

```python
from Cryptodome.Cipher import DES3
from Cryptodome import Random

# 需要补位，str不是16的倍数那就补足为16的倍数
def add_to_16(value):
    while len(value) % 16 != 0:
        value += '\0'
    return str.encode(value)

def des_encrypt(key, text, iv):
    # 加密模式 OFB
    cipher_encrypt = DES3.new(add_to_16(key), DES3.MODE_OFB, iv)
    encrypted_text = cipher_encrypt.encrypt(text.encode("utf-8"))
    return encrypted_text

def des_decrypt(key, text, iv):
    # 加密模式 OFB
    cipher_decrypt = DES3.new(add_to_16(key), DES3.MODE_OFB, iv)
    decrypted_text = cipher_decrypt.decrypt(text)
    return decrypted_text

if __name__ == '__main__':
    key = '12345678'            # 密钥，16 位
    text = 'I love Python!'     # 加密对象
    iv = Random.new().read(DES3.block_size)  # DES3.block_size == 8
    secret_str = des_encrypt(key, text, iv)
    print('加密字符串：', secret_str)
    clear_str = des_decrypt(key, secret_str, iv)
    print('解密字符串：', clear_str)

# 加密字符串： b'\xa5\x8a\xd4R\x99\x16j\xba?vg\xf2\xb6\xa9'
# 解密字符串： b'I love Python!'
```

## AES

简介：全称高级加密标准（英文名称：Advanced Encryption Standard），
在密码学中又称 Rijndael 加密法，由美国国家标准与技术研究院 （NIST）于 2001 年发布，
并在 2002 年成为有效的标准，是美国联邦政府采用的一种区块加密标准。
这个标准用来替代原先的 DES，已经被多方分析且广为全世界所使用，
它本身只有一个密钥，即用来实现加密，也用于解密。

mode 支持：CBC，CFB，CTR，CTRGladman，ECB，OFB 等。

padding 支持：ZeroPadding，NoPadding，AnsiX923，Iso10126，Iso97971，Pkcs7 等。

```python
import base64
from Cryptodome.Cipher import AES

# 需要补位，str不是16的倍数那就补足为16的倍数
def add_to_16(value):
    while len(value) % 16 != 0:
        value += '\0'
    return str.encode(value)

# 加密方法
def aes_encrypt(key, t, iv):
    aes = AES.new(add_to_16(key), AES.MODE_CBC, add_to_16(iv))  # 初始化加密器
    encrypt_aes = aes.encrypt(add_to_16(t)) # 先进行 aes 加密
    # 执行加密并转码返回 bytes
    encrypted_text = str(base64.encodebytes(encrypt_aes), encoding='utf-8')  
    return encrypted_text

# 解密方法
def aes_decrypt(key, t, iv):
    # 初始化加密器
    aes = AES.new(add_to_16(key), AES.MODE_CBC, add_to_16(iv))     
    # 优先逆向解密 base64 成 bytes   
    base64_decrypted = base64.decodebytes(t.encode(encoding='utf-8')) 
    # 执行解密密并转码返回str 
    decrypted_text = str(aes.decrypt(base64_decrypted), encoding='utf-8').replace('\0', '')  
    return decrypted_text

if __name__ == '__main__':
    secret_key = '12345678'   # 密钥
    text = 'I love Python!'   # 加密对象
    iv = secret_key           # 初始向量
    encrypted_str = aes_encrypt(secret_key, text, iv)
    print('加密字符串：', encrypted_str)
    decrypted_str = aes_decrypt(secret_key, encrypted_str, iv)
    print('解密字符串：', decrypted_str)

# 加密字符串： lAVKvkQh+GtdNpoKf4/mHA==
# 解密字符串： I love Python!
```

### AES ECB PKC7 模式

```python
from Cryptodome.Cipher import AES
from Cryptodome.Util.Padding import pad

def aes_cipher(key, aes_str):
    # 使用key,选择加密方式
    aes = AES.new(key.encode('utf-8'), AES.MODE_ECB)
    pad_pkcs7 = pad(aes_str.encode('utf-8'), AES.block_size, style='pkcs7')  # 选择pkcs7补全
    encrypt_aes = aes.encrypt(pad_pkcs7)
    # 加密结果
    encrypted_text = str(base64.encodebytes(encrypt_aes), encoding='utf-8')  # 解码
    encrypted_text_str = encrypted_text.replace("\n", "")
    # 此处我的输出结果老有换行符，所以用了临时方法将它剔除
    return encrypted_text_str
```

## RC4

简介：英文名称：Rivest Cipher 4，也称为 ARC4 或 ARCFOUR，是一种流加密算法，
密钥长度可变。它加解密使用相同的密钥，因此也属于对称加密算法。
RC4 是有线等效加密（WEP）中采用的加密算法，也曾经是 TLS 可采用的算法之一，
该算法的速度可以达到 DES 加密的 10 倍左右，且具有很高级别的非线性，
虽然它在软件方面的简单性和速度非常出色，但在 RC4 中发现了多个漏洞，
它特别容易受到攻击，RC4 作为一种老旧的验证和加密算法易于受到黑客攻击，
现在逐渐不推荐使用了。

```python
import base64
from Cryptodome.Cipher import ARC4

def rc4_encrypt(key, t):
    enc = ARC4.new(key.encode('utf8'))
    res = enc.encrypt(t.encode('utf-8'))
    res = base64.b64encode(res)
    return res

def rc4_decrypt(key, t):
    data = base64.b64decode(t)
    enc = ARC4.new(key.encode('utf8'))
    res = enc.decrypt(data)
    return res

if __name__ == "__main__":
    secret_key = '12345678'   # 密钥
    text = 'I love Python!'   # 加密对象
    encrypted_str = rc4_encrypt(secret_key, text)
    print('加密字符串：', encrypted_str)
    decrypted_str = rc4_decrypt(secret_key, encrypted_str)
    print('解密字符串：', decrypted_str)

# 加密字符串： b'8tNVu3/U/veJR2KgyBw='
# 解密字符串： b'I love Python!'
```

## Rabbit

简介：Rabbit 加密算法是一个高性能的流密码加密方式，
2003 年首次被提出，它从 128 位密钥和 64 位初始向量（iv）创建一个密钥流。

目前没有找到有第三方库可以直接实现 Rabbit 算法，
在 Python 中实现可以 [参考](https://asecuritysite.com/encryption/rabbit2)

## RSA

简介：英文名称：Rivest-Shamir-Adleman，是 1977 年由罗纳德·李维斯特（Ron Rivest）、
阿迪·萨莫尔（Adi Shamir）和伦纳德·阿德曼（Leonard Adleman）一起提出的，
RSA 就是他们三人姓氏开头字母拼在一起组成的，RSA 加密算法是一种非对称加密算法。
在公开密钥加密和电子商业中RSA被广泛使用。它被普遍认为是目前比较优秀的公钥方案之一。
RSA是第一个能同时用于加密和数字签名的算法，它能够抵抗到目前为止已知的所有密码攻击。

```python
import rsa

def rsa_encrypt(pu_key, t):
    # 公钥加密
    rsa = rsa.encrypt(t.encode("utf-8"), pu_key)
    return rsa

def rsa_decrypt(pr_key, t):
    # 私钥解密
    rsa = rsa.decrypt(t, pr_key).decode("utf-8")
    return rsa

if __name__ == "__main__":
    public_key, private_key = rsa.newkeys(512)   # 生成公钥、私钥
    print('公钥：', public_key)
    print('私钥：', private_key)
    text = 'I love Python!'  # 加密对象
    encrypted_str = rsa_encrypt(public_key, text)
    print('加密字符串：', encrypted_str)
    decrypted_str = rsa_decrypt(private_key, encrypted_str)
    print('解密字符串：', decrypted_str)

'''
公钥： PublicKey(7636479066127060956100056267701318377455704072072698049978592945665550579944731953431504993757594103617537700972424661030900303472123028864161050235168613, 65537)
私钥： PrivateKey(7636479066127060956100056267701318377455704072072698049978592945665550579944731953431504993757594103617537700972424661030900303472123028864161050235168613, 65537, 3850457767980968449796700480128630632818465005441846698224554128042451115530564586537997896922067523638756079019054611200173122138274839877369624069360253, 4713180694194659323798858305046043997526301456820208338158979730140812744181638767, 1620238976946735819854194349514460863335347861649166352709029254680140139)
加密字符串： b"\x1aaeps\xa0c}\xb6\xcf\xa3\xb0\xbb\xedA\x7f}\x03\xdc\xd5\x1c\x9b\xdb\xda\xf9q\x80[=\xf5\x91\r\xd0'f\xce\x1f\x01\xef\xa5\xdb3\x96\t0qIxF\xbd\x11\xd6\xb25\xc5\xe1pM\xb4M\xc2\xd4\x03\xa6"
解密字符串： I love Python!
'''
```

## 模块 Cryptodome

```python
import base64
from Cryptodome.PublicKey import RSA
from Cryptodome.Cipher import PKCS1_v1_5

data = "cKK8B2rWwfwWeXhz"
public_key = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAM1xhOWaThSMpfxFsjV5YaWOFHt+6RvS+zH2Pa47VVr8PkZYnRaaKKy2MYBuEh7mZfM/R1dUXTgu0gp6VTNeNQkCAwEAAQ=="
rsa_key = RSA.import_key(base64.b64decode(public_key))  # 导入读取到的公钥
cipher = PKCS1_v1_5.new(rsa_key)                        # 生成对象
cipher_text = base64.b64encode(cipher.encrypt(data.encode(encoding="utf-8")))
print(cipher_text)
```

出处 [Python常见的各种加密解密算法_吾爱破解论坛](https://www.52pojie.cn/thread-1829215-1-1.html)
